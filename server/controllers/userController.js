import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const signup = async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    const userDoc = await User.create({
      name,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.findOne({ email });

    if (userDoc) {
      const isPasswordMatch = await bcrypt.compare(password, userDoc.password);

      if (isPasswordMatch) {
        const token = jwt.sign({id: userDoc._id }, 'test_secret_key');
        res.cookie('token', token, { httpOnly: true, sameSite: 'none', secure: true}).json(userDoc);
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred' , error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

