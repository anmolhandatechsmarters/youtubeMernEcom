const mongoose= require('mongoose');

const orderSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    orderItems:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"orderItems"
    },
    orderDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    deliveryDate:{
        type:Date,
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addressses",
    },
    paymentDetails:{
        paymetMethod:{
            type:String,
        },
        transactionId:{
            type:String
        },
        paymentId:{
            types:String,
        },
        paymentStatus:{
            type:String
        }
    },
    totalPrice:{
        type:Number,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        required:true,
    },
    discounte:{
        type:Number,
        required:true,
    },
    orderStatus:{
        type:String,
        required:true,
        default:"PENDING"
    },
    totalItem:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Order =mongoose.model('orders',orderSchema);

module.exports = Order