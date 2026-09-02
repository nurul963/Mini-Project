const errorHandler=(error,req,resp,next)=>{
    console.error(error);
    const statusCode=error.statusCode || 500;
    resp.status(statusCode).json({
        success:false,
        message:error.message || "Internal server error"
    })
}
export default errorHandler