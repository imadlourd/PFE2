import express from 'express';
import { signup, login, getUserById } from '../controllers/userController.js';
import { authenticateToken } from '../middlewares/authenticateToken.js';
import User from '../models/User.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', authenticateToken, getUserByToken);

function  getUserByToken(req, res) {

    res.send(req.user);
   
   
}


export default router;
