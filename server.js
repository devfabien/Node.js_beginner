const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(3007, "localhost", () => {
  console.log("server is listening to port 3007");
});
