import express from 'express';
import { showChallanges } from '../controllers/challangeController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import User from '../models/Challange.js';

const router = express.Router();

router.get('/challanges', showChallanges);







export default router;