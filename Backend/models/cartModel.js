const mongoose =require("mongoose")

const cartSchema=new mongoose.Schema({
    users:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    cartItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"cartItems",
            requried:true,
        }
    ],
    totalPrice:{
        type:Number,
        requried:true,
        default:0
    },
    totalItem:{
        type:Number,
        requried:true,
        default:0      
    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
        default:0
    },
    discounte:{
        type:Number,
        required:true,
        default:0
    }
});
const CartModel= mongoose.model('cart',cartSchema);
module.exports = CartModel