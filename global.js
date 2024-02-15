// This will return the global object that exists in the Node.js namespace
console.log(global);

// This won't work because the document is in the window object not in the global Node.js namespace
// console.log(document.querySelector);

// This will return the directory path
console.log(__dirname);

// This will return the file pth
console.log(__filename);
