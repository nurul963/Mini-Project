export const roleMiddleware=(...allwedRole)=>{
    return (req,resp,next)=>{
        const {role}=req.user;
        if(!role){
            return resp.status(429).json({
                success:false,
                message:"Role not found"
            })
        }
        if(!allwedRole.includes(role)){
           return resp.status(429).json({
                success:false,
                message:"Access denied"
            }) 
        }
        next();
    }
}