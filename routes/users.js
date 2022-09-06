import express from 'express';
import {
  _addUser,
  login,
  logout,
} from '../controllers/users.js';
import {verifyToken} from '../middleware/verifyToken.js';

const authRouter = express.Router();

authRouter.post('/register', _addUser);
authRouter.post('/login', login);
authRouter.get('/logout', logout);
authRouter.get('/token', verifyToken, (req, res) => {
  res.sendStatus(200);
})

export default authRouter;
