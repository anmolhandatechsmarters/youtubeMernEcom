const mongoose =require("mongoose");
const mongourl="mongodb://localhost:27017";

const connectDb=()=>{
    return mongoose.connect(mongourl)
}
module.exports = connectDb;
