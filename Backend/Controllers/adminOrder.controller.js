const orderService=require("../service/orderService")

const getAllOrders=async(req,res)=>{
    try{
            const orders=await orderService.getAllOrder();
            return res.status(200).send(orders)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}


const ConfirmOrder=async(req,res)=>{
    const orderId= await  req.params.orderId;
    try{
        const orders= await orderService.confirmOrder(orderId)
        return res.status(200).send(orders)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}

const shippOrder=async(req,res)=>{
    const orderId=await req.params.orderId;
    try{
        const orders= await orderService.shipOrder(orderId)
        return res.status(200).send(orders)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}

const deliverOrder=async(req,res)=>{
    const orderId=await req.params.orderId;
    try{
        const orders= await orderService.deleverOrder(orderId)
        return res.status(200).send(orders)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}


const cancelOrder=async(req,res)=>{
    const orderId=await req.params.orderId;
    try{
        const orders= await orderService.cancelOrder(orderId)
        return res.status(200).send(orders)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}

const deleteOrder=async(req,res)=>{
    const orderId=await req.params.orderId;
    try{
        const orders= await orderService.deleteOrder(orderId)
        return res.status(200).send(orders)
    }catch(error){
        res.status(500).send({error:error.message})
    }
}

module.exports={
    getAllOrders,ConfirmOrder,shippOrder,deliverOrder,cancelOrder,deleteOrder
}