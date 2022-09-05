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
authRouter.delete('/logout', logout);

export default authRouter;
