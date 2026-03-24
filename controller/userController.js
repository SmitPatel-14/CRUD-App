import User from '../models/User.model.js'

const createUser = async (req,res)=>{
    const {name,email,age,intrest} = req.body;
    if(!name  || !email || !age || !intrest) {
        return res.status(400).json({
            success : false,
            message :"All field are requried"
        })
    }
    try{
      const existingUser = await User.findOne({email})
      if(existingUser){
         return res.status(400).json({
                message : "user already exist"
            })
      }
      const newuser = await User.create({
        name,email,age,intrest
      })
         if(!newuser){
            return res.status(400).json({
                message : "user not created successfully"
            })
        }
       res.status(200).json({
        success : true,
        message : "user created successfully"
       }) 
    }catch(error){
        return res.status(400).json({
            message : "User is not created",
            success : false,
            error
        })
    }
}

export {createUser}