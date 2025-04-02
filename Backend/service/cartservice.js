const Cart = require("../models/cartModel")
const CartItem=require("../models/cartItemModel");
const { default: Product } = require("../../Frontend/ecom/src/Customer/Components/Product/Product");

async function createCart(user){
    try{
        const cart=new Cart({user});
        const createdCart=await cart.save();
        return createdCart;
    }catch(error){
        throw new Error(error.message)
    }
}
async function findUserCart(userId){
    try{
            let cart=await Cart.findOne({user:userId});
            let cartItem= await CartItem.find({card:cart_id,}).populate("product");
            cart.cartItems=cartItem
            let totalPrice=0;
            let totalDiscountedPrice=0
            let totalItem=0

            for(let cartItem of cart.cartItems){
                totalPrice+=cartItem.price;
                totalDiscountedPrice+=cartItem.dicountedPrice;
                totalItem+=cartItem.quantity;
            }

            cart.totalPrice=totalPrice;
            cart.totalItem=totalItem;
            cart.discounte=totalPrice-totalDiscountedPrice

            return cart;


    }catch(error){
        throw new Error(error.message)
    }
}


async function addCartItem(userId,req){
    try{
        const cart =await Cart.findOne({user:userId})
        const product =await Product.FindById(req.productId);
        const isPresent= await CartItem.findOne({cart:cart._id , product:product._id ,userId})
        if(!isPresent){
            const cartItem=new cartItem({
                product:product._id,
                cart:cart._id,
                quantity:1,
                userId,
                price:product.price,
                size:req.size,
                discountedPrice:product.dicountedPrice
            })
            const createdCartitem=await cartItem.save();
            cart.cartItems.push(createdCartitem);
            await cart.save();
            return "Item added to cart"
        }


        

    }catch(error){

    }
}







module.exports={
    createCart,findUserCart,addCartItem
}