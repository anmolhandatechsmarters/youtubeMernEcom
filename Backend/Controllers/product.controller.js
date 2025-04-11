const productService=require("../service/product.service")

const createPrdouct=async(req,res)=>{
    try{
        const product= await productService.createProduct(req.body)
        return res.status(201).send(product)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}


const deletePrdouct=async(req,res)=>{
    const productId=req.params.id
    try{
        const product= await productService.deleteProduct(req.body)
        return res.status(201).send({message:"Delete Product Succefully"})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

const updatePrdouct=async(req,res)=>{
    const productId=req.params.id
    try{
        const product= await productService.UpdateProduct(req.body)
        return res.status(201).send({message:"Update Product Succefully"})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

const findProductById=async(req,res)=>{
    const productId=req.params.id
    try{
        const product= await productService.findProductById(req.body)
        return res.status(201).send(product)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}


const getAllProduct=async(req,res)=>{
    const productId=req.params.id
    try{
        const product=await productService.getAllProducts(req.query)
        return res.status(200).send(product)
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

const createMultipleProducts=async(req,res)=>{
    const productId=req.params.id;
    try{
            const product = await productService.createMultipleProducts(req.body)
            return res.status(200).send({message:"Product created Succefully"})
    }catch(error){
        return res.status(500).send({message:error.message})
    }
}

module.exports ={
    createPrdouct,getAllProduct,createMultipleProducts,findProductById,updatePrdouct,deletePrdouct
}