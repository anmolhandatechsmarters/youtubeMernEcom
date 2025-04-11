const userService=require("../service/user.service")
const jwtProvider =require("../config/jwtProvider")

const register=async(req,res)=>{
    try{    
        const user =await userService.createUser(req.body);
        const jwt =jwtProvider.generateToken(user._id)
        await cartservice.createCart(user);
        return res.status(200).send({jwt,message:"register Successfullyt"})
    }catch(error){
            throw new Error("error.message")
    }
}


const login =async(req,res)=>{
    const {password,email}=req.body
    try{
            const user=await userService.getUserByEmail(email)

            if(!user){
                return res.status(404).send({message:"user not found"})
            }
        const isPasswordValid=await bycrypt.compare(password,user.password)

        if(!isPasswordValid){
            return res.status(401).send({message:"Password is Invalid"})
        }

        const jwt =jwtProvider.generateToken(user._id)
        return res.status(200).send({jwt,message:"login Successfull"})
    }catch(error){
        return res.status(500).send({jwt,message:"Internal server error"})
    }
}

module.exports = {
    login,register
}