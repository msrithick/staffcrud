const express = require("express");
const router = express.Router();

const RegisterController = require("../Controller/registercontroller");
const userController = require("../Controller/usercontroller");
const {registervalid,userlogin}=require("../Validation/uservalidation");
const staffController = require("../Controller/staffcontroller");
const {staffvalidation} = require("../Validation/staffvalidation");



router.post("/register",registervalid,RegisterController.register)
router.post("/login",userlogin,RegisterController.login)
router.post("/products",userController.createuser)
router.put("/updatess",userController.updateproductss);
router.get("/getproducts",userController.getproduct);
router.get("/users",userController.userproducts);
router.get("/userIds",userController.getuserbyId)
router.delete("/deleteproductid",userController.deleteproduct)

router.post("/createstf",staffvalidation,staffController.create_staff);
router.get("/getstf",staffController.getstaff);
router.put("/deletestf",staffController.deletestaff);
router.put("/reactivestf",staffController.reActivatestaff);

module.exports = router;