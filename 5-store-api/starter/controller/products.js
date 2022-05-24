//this is controller file


// API
const getAllProductsStatic = async (req,res)=>{
    throw new Error(`Testing async errors`);
    res.status(200).json({msg:`The server has responded all products already`});
};
const getAllProducts = async (req,res)=>{
    res.status(200).json({msg:`products route has been found`});
};

module.exports = {
    getAllProductsStatic,
    getAllProducts
};