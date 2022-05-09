module.exports.item = ['item1','item2'] // ở trên này mình tạo ra 1 đối tượng item, có chứa 2 thuộc tính item1 & item2
const person = {
    name: 'Thiện',
}

module.exports.singlePerson = person
// module.exports = person || Nếu mình sử dụng thằng này thôi, thì tương đương với việc gán toàn bộ export bằng với obj person
// => result sẽ là export có 2 đối tượng -item[] và -singlePerson{}
// console.log(module);