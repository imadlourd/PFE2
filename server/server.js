const express = require("express")
const app = express()
const _PORT = process.env.PORT;
const cors = require("cors")
app.use(cors())
app.use(express.json())

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// CONNECT TO DB
const   username = process.env.USERNAME,
        password = process.env.PASSWORD,
        database = process.env.DB;

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://anourbelabbes:rD1ImvszAnCJPms8@cluster0.p9o7h7f.mongodb.net/BookTracker?retryWrites=true&w=majority")

// USER MODEL
const UserModel = require('./models/Users')

// get request
app.get("/users", async (req, res)=>{
    const users = await UserModel.find();
    res.json(users)
})

// create user
app.post("/createUser", async (req, res) => {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body)
})

// login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    // find user by email
    const user = await UserModel.findOne({ email , password });

    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    // check password
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    // generate JWT token
    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    res.json({ message: "Login successful", token });
});

app.listen("3001", ()=>{
    console.log("Server Works !!")
})
