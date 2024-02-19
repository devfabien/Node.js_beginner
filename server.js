const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
});

server.listen(3007, "localhost", () => {
  console.log("server is listening to port 3007");
});
