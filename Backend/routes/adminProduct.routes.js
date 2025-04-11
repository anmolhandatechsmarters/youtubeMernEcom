const express = require("express")
const router = express.Router()

const productController = require("../Controllers/product.controller")
const authenticate =require("../middleware/authenticate")

router.post("/",productController.createPrdouct)
router.post("/creates",productController.createMultipleProducts)
router.delete("/:id",productController.deletePrdouct)
router.put("/:id",productController.updatePrdouct)

module.exports = router