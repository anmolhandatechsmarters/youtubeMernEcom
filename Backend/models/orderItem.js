const mongoose = require("mongoose")

const OrderItemSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products",
        required:true
    },
    size:{
        type:String,
    },
    Quantity:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountedPrice:{
        type:Number,
        requried:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        requried:true,
    },
    deliveryDate:{
        type:Date,
    }
})

const OrderItem =mongoose.model("orderItems",OrderItemSchema);

module.exports = OrderItem