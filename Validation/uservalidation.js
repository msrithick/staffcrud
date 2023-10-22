const joi=require('joi')

const register = joi.object({
    name:joi.string().required().min(3).max(20),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase(),
    phone:joi.string().length(10).pattern(/^[0-9]+$/).required(),
    password:joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$')).required(),
})

const registervalid = async(req,res,next)=>{
    try {
        await register.validateAsync({...req.body})
        next()
    } catch (error) {
        res.json({
            message:error
        })
    }
}

const login = joi.object({
    username:joi.string().required().min(3).max(20),
    password:joi.string().pattern(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$')).required()

})

const userlogin = async(req,res, next) =>{
    try{
        await login.validateAsync({...req.body})
        next()
    }catch (error){
        res.json({
            message:error
        })
    }
}


module.exports ={
    registervalid,
    userlogin
}