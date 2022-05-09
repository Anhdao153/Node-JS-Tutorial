const path = require('path')


console.log(path.sep);

const filePath = path.join('/document','sub-document','simple.txt');

console.log(filePath);

const base = path.basename(filePath)

console.log(base);

const rootFile = path.resolve(__dirname, 'document','sub-document','simple.txt');

console.log(rootFile);