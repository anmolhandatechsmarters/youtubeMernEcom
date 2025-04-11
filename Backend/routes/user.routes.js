const express=require("express")
const router= express.Router();
const userController= require("../Controllers/user.controller")

router.get("/profile",userController.getUserProfile);
router.get("/",userController.getAllUser)

module.exports = router