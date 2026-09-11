const response=(code,message,data=[])=>{
    return {
        statusCode:code,
        message,
        data
    }
}
export default response;