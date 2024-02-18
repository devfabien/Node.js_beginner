const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog2.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog3.txt");

readStream.on("data", (chunk) => {
  console.log("-----new chunk---------");
  console.log(chunk);
  writeStream.write("\nNew Chunk\n");
  writeStream.write(chunk);
});

//Also you can write a stream using pipes

//readStream.pipe(writeStream)
