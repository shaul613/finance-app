import express from 'express';
import {
  _addLikeToMsg,
  _getLikes,
} from '../controllers/msg.js';

const msgRouter = express.Router();

msgRouter.post('/like', _addLikeToMsg);
msgRouter.get('/get_likes', _getLikes);

export default msgRouter;
