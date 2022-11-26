const ErrorHandler = require("../utils/errorhandler");

module.exports = (err,req, res ,next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // incorrect mongodb id error
    if(err.name === "CastError"){
        const message = `Resourcee not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        name: err.name,
        error: err.message,
        stack: err.stack,
    })
}