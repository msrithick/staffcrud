 // |=========== CRUD Operator Section Start ===========|
 const Newuser = require("../Model/usermodel");

 const createuser = async(req,res)=>{
    try{
        let product = new Newuser({

            productname:req.body.productname,
            productprice:req.body.productprice,
            qunatity:req.body.qunatity,
            manufacturedate:req.body.manufacturedate,
            expirydate:req.body.expirydate,
            isAvailable:req.body.isAvailable
        })
        await product.save();
        res.json({
            message: "user created successful"
        })
    }catch(error){
        res.json({
            message: "user not created"
        })
    }
}


// |=========== Product Update Start ===========|

const updateproductss = async(req, res)=>{
    try {
        let productId = req.body.productId;

        let updateproducts = {
            productname:req.body.productname,
            productprice:req.body.productprice,
            qunatity:req.body.qunatity,
            manufacturedate:req.body.manufacturedate,
            expirydate:req.body.expirydate,
            isAvailable:req.body.isAvailable
        }
        console.log(updateproducts)
        await Newuser.findByIdAndUpdate(productId, {$set:updateproducts})
        res.json({
            message: "Product Updated",
        })
    } catch (error) {
        console.log(error);
        res.json({
            message: "error"
        })
    }
}

// |=========== Product Update Method End ===========|


// |=========== Product get Method start ===========|

  const getproduct = async(req, res)=>{
    const page =1;
    const limit=2;

    try {
        const skip = (page-1)*limit;
        const getproduct = await Newuser.find().skip(skip).limit(limit)
        res.json(getproduct)

        // let getproduct = await Newuser.find();
        // res.json(getproduct);
    } catch (error) {
        console.log(error);
        res.json({
            message:"error"
        })
    }
  }

//  |============ pagination method ============|

const userproducts = async(req, res) => {
    const page =parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    try {
        const skip = (page-1)*limit;
        const users = await Newuser.find().skip(skip).limit(limit);
        res.json(users)
        
    } catch (error) {
        res.json({
            message:"error"
        })
    }
}

//  |========= Single User ID using Get Method =========|

   const getuserbyId = async(req, res)=>{
    const userId = req.query.userId;
    try{
        let user = await Newuser.findById(userId);
        if(!user){
            res.json({
                message: "user not found"
            })
        }
        res.json(user)
    }catch(error){
        res.json({
            message: "error occured"
        })
    }
   } 
  // |=========== Product get Method End ============|


  // |=========== Product Delete Method ===========|

  const deleteproduct = async(req, res)=>{
    try {
        let productId = req.body.productId;
        await Newuser.findByIdAndDelete(productId);
        res.json({
            message: "user daleted"
        })
    } catch (error) {
        res.json({
            message:"error"
        })
    }
  }

module.exports={
    createuser,
    updateproductss,
    getproduct,
    deleteproduct,
    userproducts,
    getuserbyId
}