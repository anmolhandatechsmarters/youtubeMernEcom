const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const authRoutes = require("./routes/auth.routes")
const userRoutes=require("./routes/user.routes")
const ProductRouter= require("./routes/product.router")
const adminProductRouter=require("./routes/adminProduct.routes")
const cartRouter=require("./routes/cart.routes")
const cartItemRouter=require("./routes/cartItem.routes")
const orderRouter=require("./routes/order.routes")
const reviewRouter=require("./routes/review.router")
const ratingRouter=require("./routes/rating.routes")
const adminOderRouter=require("./routes/adminOrder.routes")
app.get("/",(req,res)=>{
    res.status(200).json({mesage:"welcome anmol"});
})

app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/api/products",ProductRouter)
app.use("/api/admin/products",adminProductRouter)
app.use("/api/cart",cartRouter)
app.use("/api/cart_items",cartItemRouter)
app.use("api/order",orderRouter)
app.use("/api/reviews",reviewRouter)
app.use("/api/ratings",ratingRouter)
app.use("/api/admin/orders",adminOderRouter)

module.exports =app;