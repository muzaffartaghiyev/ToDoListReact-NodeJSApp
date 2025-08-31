"use strict"


module.exports=(error,res,req,next)=>{

    const statusCode = res.errorStatusCode ?? 500

    res.status(statusCode).send({
        error:true,
        message:error.message,
        cause:error.cause,
        stack:error.stack
    })

}
 