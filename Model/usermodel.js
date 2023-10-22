const { date } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    productname:{
        type:String,
        required:true
    },
    productprice:{
        type:String,
        required:true
    },
    qunatity:{
        type:String,
        required:true
    },
    manufacturedate:{
        type:String,
        required:true
    },
    expirydate:{
        type:String,
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:true
    }

},{timestamps:true}
)

const createnewuser =mongoose.model("create_user",userSchema)

module.exports=createnewuser;