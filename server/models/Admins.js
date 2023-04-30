const {Schema, model} = require("mongoose");

const AdminSchema = new Schema({
    email:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required : true,
    },
    
})

const AdminModel = model("admins", AdminSchema)
module.exports = AdminModel