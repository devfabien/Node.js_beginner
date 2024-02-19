const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set header content type
  res.setHeader("Content-type", "text/plain");
  res.write("Hello, Devfabien");
  res.end();
});

server.listen(3007, "localhost", () => {
  console.log("server is listening to port 3007");
});
