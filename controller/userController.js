import User from '../models/User.model.js'

const createUser = async (req,res)=>{
    const {name,email,age,interest} = req.body;
    if(!name  || !email || !age || !interest) {
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
      await User.create({
        name,email,age,interest
      })
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

const getUser = async (req,res)=>{
    try{
    const allUsers = await User.find();
    if(allUsers.length === 0){
         return res.status(404).json({
            success : false,
            message : "there is no user in database"
        })
    }
    res.status(200).json({
        success : true,
        allUsers
    })
    }catch(error){
        return res.status(400).json({
            success : false,
            message : "error in getting data"
        })
    }
}

const updateUser = async (req,res)=>{
    const {name,email,age,interest} = req.body;
    if(!name  || !email || !age || !interest) {
        return res.status(400).json({
            success : false,
            message :"All field are required"
        })
    }
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
            success : false,
            message :"User not found"
        })
        }
        user.name = name;
        user.age = age;
        user.interest = interest;
        await user.save()
        res.json(user)

    }catch(error){
        return res.status(400).json({
            success : false,
            message :"error in updating user",
            error : error.message
        })
    }
}

const deleteUser = async (req,res)=>{
    const {id} = req.params
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success : true,
            message :"user deleted successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success : true,
            message :"user not deleted ",
            error :error.message
        })
    }
}

export {createUser,getUser,updateUser,deleteUser}