var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.js
var import_http = __toESM(require("http"), 1);

// src/math.js
function add(a, b) {
  return a + b;
}

// src/app.js
function calculateSum(a, b) {
  return add(a, b);
}

// src/server.js
var server = import_http.default.createServer((req, res) => {
  if (req.url === "/") {
    const result = calculateSum(20, 22);
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify({
      message: "CI/CD Demo Server",
      result
    }));
    return;
  }
  res.writeHead(404, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify({
    message: "Not Found"
  }));
});
var PORT = process.env.PORT || 3e3;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
