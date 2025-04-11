const express= require("express")
const router=express.Router()

const cartItemController= require("../Controllers/cartItem.controller")
router.put("/:id",cartItemController.updateCartItem)
router.delete("/:id",cartItemController.removeCartItem)

module.exports = router