const { readFile,writeFile } = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {

//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 return reject(err);
//             } else {
//                 resolve(data);
//             }
//         });

//     });
// };

// getText('./document/firstFile.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


const start = async () =>{
    try {
        const first = await readFilePromise('./document/firstFile.txt','utf8');
        const second = await readFilePromise('./document/secondFile.txt','utf8');
        await writeFilePromise('./document/result-file-2.txt',`ao ma canada không the tin: --${first}--\n--${second}--`);
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};

start();