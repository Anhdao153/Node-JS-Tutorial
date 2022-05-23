
const notFound = (req,res) => {
    res.status(404).send('Trang bạn cần tìm không hề tồn tại');
};

module.exports = notFound;