const jwt=require('jsonwebtoken')
const user = require('../signUpSchema');
    const adminAuth = async (req,res,next) => {
    const {authorization} = req.headers
    if(!authorization){
         res.json("Unauthorized request")
    }
    else{

        try{
            const token = authorization.split(' ')[1];
            const {_id}=jwt.verify(token,"abcdefggfedcba");
            const response = await user.findOne({_id}).select('type')
            if(response.type==='admin')
            {
                next();
            }
            else
            {
                res.json({msg:"Invalid user"})
            }
        }
        catch(error)
        {
            res.json({msg:"Invalid user"});
        }
}
}
const bothAuth = async (req,res,next) => {
    const {authorization} = req.headers
    if(!authorization){
         res.json(authorization)
    }
    else{

        try{
            const token = authorization.split(' ')[1];
            const {_id}=jwt.verify(token,`${process.env.jwtSignature}`);
            const response = await user.findOne({_id}).select('type')
            if(response.type==="admin"||response.type==="user")
            {
                next();
            }
            else
            {
                res.json({msg:"Invalid user"})
            }
        }
        catch(error)
        {
            res.json({msg:"Invalid user"});
        }
}
}
module.exports={adminAuth,bothAuth}