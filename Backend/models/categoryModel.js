const mongoose =reqruie("mongoose")

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50,
    },
    parentCategory:{
        type:mongoose.Schema.Types.ObjecId,
        ref:"categories",
    },
    level:{
        type:Number,
        requried:true,
    }
})

const category =mongoose.model("categories",categorySchema);

module.exports = category