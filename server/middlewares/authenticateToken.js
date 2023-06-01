import jwt from 'jsonwebtoken';

import User from '../models/User.js';


export const authenticateToken =  (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    
      jwt.verify(token,'test_secret_key', async (err, user) => {
      if (err) return res.status(403).send(err.message);
      req.user = await User.findById(user.id).select('-password');
    
      next();
    });
  }
  
  else {
    return res.status(401).json({  message: "No token, authorization denied" });
  } 
};
