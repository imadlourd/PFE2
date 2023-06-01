    import mongoose from "mongoose";


    const bookSchema = new mongoose.Schema({
        ISBN: {
            type: String,
            required: true
        },
        status: {
            type: String,
            
            required: true
        },
        pages: {
            type: Number,
        }
        });

    const UserSchema = new mongoose.Schema({
        name:String,
        lastName:String,
        email:{
            type: String,
            unique:true,
            required: true
        },
        password:  {
            type: String,
            required: true
        },
        age:Number,
        favGen:String,
        score:Number,
        Books:[bookSchema]

    });



    const User =mongoose.model("User", UserSchema);
    export default User

    