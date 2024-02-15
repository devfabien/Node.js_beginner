const fs = require("fs");

fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

fs.writeFile("./docs/blog.txt", "Hello, Fabien", () => {
  console.log("File is written");
});

fs.writeFile("./docs/blog1.txt", "Hello, Fabien", () => {
  console.log("This File is written");
});
