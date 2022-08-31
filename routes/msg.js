import express from 'express';
import {
  _addMsg,
  _allMsg,
  _addLikeToMsg,
  _getLikes,
} from '../controllers/msg.js';

const msgRouter = express.Router();

msgRouter.post('/like', _addLikeToMsg);
msgRouter.get('/get_likes/:id', _getLikes);
msgRouter.post('/add_msg', _addMsg);
msgRouter.get('/all_msg', _allMsg);

export default msgRouter;
