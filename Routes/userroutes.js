const express = require("express");
const router = express.Router();


const userController = require("../Controller/usercontroller");



router.post("/products",userController.createuser)
router.put("/updatess",userController.updateproductss);
router.get("/getproducts",userController.getproduct);
router.get("/users",userController.userproducts);
router.get("/userIds",userController.getuserbyId)
router.delete("/deleteproductid",userController.deleteproduct)

module.exports = router;