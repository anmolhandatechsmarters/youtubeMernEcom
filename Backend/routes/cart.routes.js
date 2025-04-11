const express= require("express")
const router=express.Router()
const cartController=require("../Controllers/cart.controller")
const authenticate = require("../middleware/authenticate")

router.get("/",cartController.findUserCart)
router.put("/add",cartController.addItemToCart)

module.exports=router