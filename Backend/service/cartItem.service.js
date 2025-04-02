const userService=require("../service/user.service")
const CartItemService=require("../models/")


async function updateCartItem(userId,cartIemId,cartItemData){
    try{
        const item =await findcartItembyId(cartIemId);
        if(!item){
            throw new Error("cart tiem not found",cartIemId)   
        }
         const user=await userService.findUserbyid(item.userId);
         if(!user){
            throw new Error("user not found",userId)
         }
         if(user._id.toString() === userId.toString()){
            item.quantity=cartItemData.quantity;
            item.price=item.quantity * item.product.price
            item.discoutedPrice=item.quantity * item.product.discoutedPrice;
            const updatedcartItem=await item.save();
            return updatedcartItem;

         }
         else{
            throw new Error("you can update this cart item")
         }

    }catch(error){
        throw new Error(error.message)
    }
}


async function removeCartItem(userId,cartItemId){
    const cartItem=await findcartItembyId(cartItemId);
    const user=await userService.findUserById(userId);

    if(user._id.toString() === cartItem.userId.toString()){
        await cartItem.findbyIdAndDelete(cartItemId)
    }
throw new Error("You cant remove another user's item")

}

async function findcartItembyId(cartItemId){
    const cartItem=await findcartItembyId(cartItemId);
    if(cartItem){
        return cartItem
    } 
    else{
        throw new Error("CartItem not Found With this Id")
    }
}


module.exports = {
    updateCartItem,removeCartItem,findcartItembyId
}