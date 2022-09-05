import express from 'express';
import {
  _addUser,
  login,
  logout,
} from '../controllers/users.js';
import {verifyToken} from '../middleware/verifyToken.js';

const authRouter = express.Router();

authRouter.get('/register', _addUser);
authRouter.get('/login', login);
authRouter.get('/logout', logout);

export default authRouter;
