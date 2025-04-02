const mongoose= require("mongoose");
const cartItems =new mongoose.Schema({
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"cart",
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'products',
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    },
    price:{
        number,
        required:true,
    },
    
})