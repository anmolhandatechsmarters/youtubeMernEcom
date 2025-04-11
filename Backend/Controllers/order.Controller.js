const orderService= require("../service/orderService")

const createOrder=async(req,res)=>{
    const user=req.user;
    try{
        let createOrder= await orderService.createOrder(user,req.body)
        return res.status(201).send(createOrder)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

const findOrderById=async(req,res)=>{
    const user=req.user
    try{
        let findOrderById=await orderService.findOrderById(req.params.id)
        return res.status(201).send(findOrderById)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}


const orderHistory=async(req,res)=>{
    const user=req.user
    try{
        let orderHistory=await orderService.userOderHistory(user._id)
        return res.status(201).send(orderHistory)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

module.exports ={
    createOrder,findOrderById,orderHistory
}