import express from 'express';
import {
  _addLikeToMsg
} from '../controllers/msg.js';

const msgRouter = express.Router();

msgRouter.post('/like', _addLikeToMsg);

export default msgRouter;
