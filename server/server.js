import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import challangeRoutes from './routes/challangeRoutes.js'

import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  
}));
mongoose.connect(process.env.ATALS_URI, {});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use('/', userRoutes);
app.use('/',challangeRoutes);




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


