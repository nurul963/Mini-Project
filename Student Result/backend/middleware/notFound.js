const notFound=(req,resp)=>{
    resp.status(404).json({
        success:false,
        message:`Reoute not found: ${req.method} ${req.originalUrl}`
    })
}
export default notFound;