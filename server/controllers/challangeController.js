import bcrypt from 'bcryptjs';
import Challange from '../models/Challange.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const showChallanges = async (req, res) => {
  try {
    const challanges = await Challange.find();

    if (challanges) {
      
     
      
      await res.send(challanges);

    } else {
      res.status(404).json({ message: 'challanges not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
