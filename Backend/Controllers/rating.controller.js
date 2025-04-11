const ratingService=require("../service/rating.service")



const createRating =async(req,res)=>{
    const user=await req.user
    try{
        const rating =await ratingService.createRating(req.body,user)
        return res.status(200).send(rating)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

const getAllReview =async(req,res)=>{
    const productId=await req.params.productId
    try{
        const rating =await ratingService.getProductRating(productId)
        return res.status(200).send(rating)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}



