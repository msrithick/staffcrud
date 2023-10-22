const joi = require("joi");

const staffV = joi.object({
    StaffName:joi.string().required().min(3).max(20),
    Staffemail:joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    Staffphone: joi.string().length(10).pattern(/^[0-9]+$/).required(),
    Staffdob: joi.string().required(),
})

const staffvalidation = async(req,res,next)=>{
    try {
        await staffV.validateAsync({...req.body});
        next();
    } catch (error) {
        console.log(error)
        res.json({
            message: "error"
        })
    }
}

module.exports={
    staffvalidation
}