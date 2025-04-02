const app=require("./index")
const connectDb =require("./config/db")
const PORT = 5454;
connectDb().then(()=>console.log("monngose Succefully Conntected"));
app.listen(PORT,()=>{
    console.log("Ecommerce api Listining on Port :",PORT)
})