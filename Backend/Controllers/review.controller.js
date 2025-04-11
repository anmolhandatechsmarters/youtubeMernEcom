const reviewService=require("../service/review.service")

const createReview =async(req,res)=>{
    const user= await req.user
    try{
        const review =await reviewService.createReview(req.body,user)
        return res.status(200).send(review)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

const getAllReview =async(req,res)=>{
    const productId=await req.params.productId
    const user= req.user
    try{
        const review =await reviewService.getAllReview(productId)
        return res.status(200).send(review)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

module.exports ={
    createReview,getAllReview
}