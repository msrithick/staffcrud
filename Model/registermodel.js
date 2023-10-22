const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
   
    },
    phone: {
      type: String,
      required: true,
    
    },
    password:{
     type:String,
     required:true
    }
  },
  { timestamps: true }
);
const registermodel = mongoose.model("Register1", registerSchema);

module.exports = registermodel;