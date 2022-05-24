const errorsHandlerMiddleware = async (err,req,res,next) =>{
    console.log(err);
    return res.status(500).json({msg:`Perhaps your request failed because the server has some problem`});
};

module.exports = errorsHandlerMiddleware;