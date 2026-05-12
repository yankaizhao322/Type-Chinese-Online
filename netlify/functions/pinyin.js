const handler = require("../../api/pinyin");

exports.handler = async event => {
  const text = event.queryStringParameters?.text || "";
  const req = {
    method: event.httpMethod,
    url: `/?text=${encodeURIComponent(text)}`,
    on(name, cb) { if (name === "end") cb(); return this; },
    destroy() {}
  };

  return new Promise(resolve => {
    const headers = {};
    const res = {
      statusCode: 200,
      setHeader(k, v) { headers[k] = v; },
      end(body) { resolve({ statusCode: this.statusCode, headers, body }); }
    };
    handler(req, res);
  });
};
