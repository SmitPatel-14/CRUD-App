import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    age : Number,
    interest : String
},{
    timestamps : true
})

const User = mongoose.model("User",UserSchema);
export default User;