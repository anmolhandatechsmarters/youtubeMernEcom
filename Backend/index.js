const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const authRoutes = require("./routes/auth.routes")
const userRoutes=require("./routes/user.routes")
app.get("/",(req,res)=>{
    res.status(200).json({mesage:"welcome anmol"});
})

app.use("/auth",authRoutes);
app.use("/user",userRoutes);

module.exports =app;