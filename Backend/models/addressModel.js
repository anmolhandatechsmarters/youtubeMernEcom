const mongoose=require("mongoose")

const Address=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    streetAddress:{
        type:String,
        required:true,
    },
    city:{
         type:String,
         required:true,
    },
    state:{
        type:String,
        requried:true,
    },
    zipcode:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    mobile:{
        type:String,
        required:true,
    }
})

const AddressModel= mongoose.model("addresses",Address)

module.exports = AddressModel