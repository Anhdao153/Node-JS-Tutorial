const { readFileSync, writeFileSync } = require('fs');
console.log("start");

const first = readFileSync('./document/firstFile.txt', 'utf8')
const second = readFileSync('./document/secondFile.txt', 'utf8')


// console.log(first, second);
writeFileSync(
    './document/result-file.txt',
    `Đây là file đồng bộ của file first: ${first} và file second: ${second}`,
    { flag: 'a' }
)
console.log("doing this");

console.log("stopped");