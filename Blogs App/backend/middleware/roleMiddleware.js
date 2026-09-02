export const authorize=(...roles)=>{
    return (req,resp,next)=>{
        if(!roles.includes(req.user.role)){
            return resp.status(403).json({
                success:false,
                message:"Access denied"
            })
        }
        next();
    }
}