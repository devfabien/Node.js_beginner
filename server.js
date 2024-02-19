const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // Set header content type
  res.setHeader("Content-type", "text/html");
  res.write("<h1>Hello, Devfabien</h1>");
  res.write("<p>A passionate developer</p>");
  res.end();
});

server.listen(3007, "localhost", () => {
  console.log("server is listening to port 3007");
});
