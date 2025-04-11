const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const createUser = async (userData) => {
  try {
    let { firstName, lastName, email, password } = userData;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      throw new Error("User already exist with email :", email);
    }
    password = await bcrypt.hash(password, 8);
    const user = await User.create({ firstName, lastName, email, password });
    console.log(user);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById = async (userId) => {
  try {
    const user = User.findById(userId);
    if (!user) {
      throw new Error("user Not found with id ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserByEmail = async (email) => {
    try {
      const user = User.findOne({email});
      if (!user) {
        throw new Error("user Not found with email ", email);
      }
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };


const getUserProfileByToken= async(token)=>{
    try{
            const userId=  jwtProvider.getUserIdfromToken(token)
            const user= await findUserById(userId)

            if(!user){
                throw new Error("user not found id",userId)
            }

            return user

    }catch(error){
        throw new Error(error.message)
    }
}

const getAllUser=async()=>{
    try{
            const users= await User.find();
            return users
    }catch(error){
        throw new Error(error.message)
    }
}



module.exports = { createUser ,findUserById,findUserByEmail,getUserProfileByToken,getAllUser};
