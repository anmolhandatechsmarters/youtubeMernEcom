const cartItemServie=require("../service/cartItem.service")

const updateCartItem=async(req,res)=>{
    const user=req.user
    try{
        const updateCartItem =await cartItemServie.updateCartItem(user._id,req.params.id,req.body)
        return res.status(200).send(updateCartItem)
    }catch(error){
    
        return res.status(500).send({message:error.message})
    }
}

const removeCartItem= async(req,res)=>{
    const user=req.user
    try{
        await cartItemServie.removeCartItem(user._id,req.params.id)
        return res.status(200).send({message:"Cart Item removed Succefully"})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

module.exports = {
    updateCartItem,removeCartItem
}


