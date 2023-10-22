const User   =require('../Model/registermodel')
const Newuser =require('../Model/usermodel')
const bcrypt =require('bcryptjs')
const jwt  =require('jsonwebtoken')


const register =async (req,res)=> {
    try {

        bcrypt.hash(req.body.password,10,async function(err,hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        
    let user = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:hashedPass
    })
    
    let exitUser = await User.findOne({
        $or: [{ email: req.body.email }, { phone: req.body.phone }]
    })
        if(exitUser){
            res.json({
                message:'already addded'
            })
        }
        else{
          
            user.save()
           
                res.json({
                    message:'user addded successfully'
                })
            
    
    }

    })
 } catch (error) {
        res.json({
            message:'An error occured'
        
    })
}
    
}
    const login = async (req,res)=>{
        try{
        let username = req.body.username
        let password=req.body.password
        let types={}
        if (typeof username === 'string') {
            types = { email: username }
        }
        else if (typeof username === 'number') {
            types = { phone: username }
        }
        
        console.log(types)
       let user = await User.findOne()
      console.log(user)
            if(user){
             bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({_id:user.id},'secretvalue',{expiresIn:'10s'})
                    res.json({
                        message:'Login successful',
                        token
                    })
                } else{
                    res.json({
                        message:'password doesnt match'
                    })
                }
            })
            }else{
                res.json({
                    message:'No user found'
                })
            }
        } 
        catch (error) {
            console.log(error)
            res.json({
                message:'An error occured'
            
        })
    }
    }

    

    module.exports={
        register,login
    }