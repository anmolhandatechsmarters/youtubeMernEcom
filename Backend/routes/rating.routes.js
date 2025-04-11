const express= require("express")
const router= express.Router()
const ratingController=require("../Controllers/rating.controller")
const authenticate =require("../middleware/authenticate")

router.post("/create",ratingController.createRating)
router.put("/product",ratingController.getAllRating)

module.exports = router