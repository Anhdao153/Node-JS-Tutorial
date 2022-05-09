const fs = require('fs');
console.log('start');
fs.readFile('./document/firstFile.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result;
    fs.readFile('./document/secondFile.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return

        }
        const second = result
        fs.writeFile('./document/result-file-async.txt', `đây là phần content được nối: "${first}" và "${second}"`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(result);
                console.log('tôi đang làm việc gì đó nòe');
            })
    })
})
console.log('chết con đĩ mẹ mày với tao');