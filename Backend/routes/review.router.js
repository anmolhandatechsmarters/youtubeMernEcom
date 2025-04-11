const express = require("express")
const router= express.Router()

const reviewController= require("../Controllers/review.controller")
const authenticate=require("../middleware/authenticate")

router.post("/create",reviewController.createReview)
router.get("/product/:productId",reviewController.getAllReview)

module.exports = router