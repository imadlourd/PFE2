const {Schema, model} = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    firstname:{
        type: String,
    },
    lastName:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    confirmPassword:{
        type: String,
    },
});

UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const UserModel = model("users", UserSchema);
module.exports = UserModel;
