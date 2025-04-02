const jwt=require("jsonwebtoken")

const Screate_Key="anmol";

const generateToken=(UserId)=>{
const token=jwt.sign({UserId},Screate_Key,{expiresIn:"48h"})
return token;
}

const getUserIdfromToken=(token)=>{
    const decodedToken=jwt.verify(token,Screate_Key);
    return decodedToken
}

module.exports ={generateToken,getUserIdfromToken};