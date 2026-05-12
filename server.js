const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const translateHandler = require("./api/translate");
const pinyinHandler = require("./api/pinyin");

const root = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let requestedPath;
  try {
    requestedPath = decodeURIComponent(url.pathname);
  } catch {
    res.writeHead(400);
    res.end("Bad request");
    return;
  }

  const filePath = requestedPath === "/"
    ? path.join(root, "index.html")
    : path.join(root, requestedPath);
  const normalized = path.normalize(filePath);

  if (!normalized.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.stat(normalized, (statError, stat) => {
    if (statError || !stat.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const ext = path.extname(normalized).toLowerCase();
    res.writeHead(200, {
      "content-type": contentTypes[ext] || "application/octet-stream",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer"
    });
    fs.createReadStream(normalized).pipe(res);
  });
}

function createServer() {
  return http.createServer((req, res) => {
    if (req.url?.startsWith("/api/translate")) {
      translateHandler(req, res);
      return;
    }
    if (req.url?.startsWith("/api/pinyin")) {
      pinyinHandler(req, res);
      return;
    }

    serveStatic(req, res);
  });
}

function startServer(port = Number(process.env.PORT || 8787)) {
  const server = createServer();
  server.listen(port, "0.0.0.0", () => {
    console.log(`Type Chinese running at http://localhost:${port}`);
    console.log("Set GOOGLE_TRANSLATE_API_KEY, DEEPL_API_KEY, or OPENAI_API_KEY to enable production translation.");
  });
  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = {
  createServer,
  startServer
};
