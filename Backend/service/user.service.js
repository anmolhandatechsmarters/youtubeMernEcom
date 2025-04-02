const User =require("../models/userModel");
const bcrypt=require("bcrypt");
const createUser= async(userData)=>{
    try{
        let {firstName,lastName,email,password,}=userData;
        const isUserExist=await  User.findOne({email});
        if(isUserExist){
            throw new Error("User already exist with email :",email)
        }
        password = await bcrypt.hash(password,8)
        const user= await User.create({firstName,lastName,email,password})
            console.log(user)
        return user
    }catch(error){
            throw new Error(error.message)
    }
}


module.exports ={ createUser }