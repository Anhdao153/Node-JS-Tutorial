
const fs = require('fs');
// mặc định là 64kb 
// last buffer:
//highWaterMark: kiểm soát kích thước của file được đọc

const stream =fs.createReadStream('./document/big.txt',{highWaterMark: 90000, encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result);
});

stream.on('error', (err) => console.log(err));