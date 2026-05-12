const GOOGLE_INPUT_TOOLS = "https://inputtools.google.com/request";

async function fetchCandidates(text, count) {
  const url = `${GOOGLE_INPUT_TOOLS}?text=${encodeURIComponent(text)}&itc=zh-t-i0-pinyin&num=${count}&ie=utf-8&oe=utf-8`;
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      "referer": "https://www.google.com/"
    },
    signal: AbortSignal.timeout(5000)
  });
  if (!res.ok) throw new Error(`Google Input Tools: HTTP ${res.status}`);
  const data = await res.json();
  // Response: ["SUCCESS", [[inputText, [candidates...], {...}]]]
  if (!Array.isArray(data) || data[0] !== "SUCCESS") throw new Error("No results");
  return data[1]?.[0]?.[1] || [];
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function getQueryText(req) {
  try {
    const url = new URL(req.url, "http://localhost");
    return url.searchParams.get("text") || "";
  } catch {
    return "";
  }
}

module.exports = async function handler(req, res) {
  const text = getQueryText(req).toLowerCase().replace(/[^a-z]/g, "").slice(0, 50);
  if (!text) { sendJson(res, 400, { error: "text required" }); return; }

  try {
    const candidates = await fetchCandidates(text, 9);
    sendJson(res, 200, { candidates });
  } catch (err) {
    sendJson(res, 502, { error: err.message });
  }
};
