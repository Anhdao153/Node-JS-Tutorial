const {readFile} = require('fs');

console.log('started a first task');

//check file path!!!

readFile('./document/firstFile.txt','utf8', (err, result)=>{
if (err) {
    console.log(err);
    return;
}
console.log(result);
console.log('compete first task');

});
console.log('starting next task');