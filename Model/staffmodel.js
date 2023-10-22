const  mongoose = require("mongoose");
const Schema = mongoose.Schema;


const staffSchema = new Schema({
    StaffName:{
        type:String,
        required:true
    },
    Staffemail:{
        type:String,
        required:true
    },
    Staffphone:{
        type:String,
        required:true
    },
    Staffdob:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

const staffdetails = mongoose.model("Staffs",staffSchema);

module.exports=staffdetails;
