const Category=require("../models/categoryModel")

async function createProduct(reqData){
    let topLevel=await Category.findOne({name:reqData.topLevelCategory})
    if(!topLevel){
        topLevel=new Category({
            name:reqData.topLevelCategory,
            level:1
        })
    }


    

}