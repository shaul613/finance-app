import express from 'express';
import {verifyToken} from '../middleware/verifyToken.js';
import {
  _addMsg,
  _allMsg,
  _addLikeToMsg,
  _getLikes,
} from '../controllers/msg.js';

const msgRouter = express.Router();

msgRouter.post('/like', verifyToken, _addLikeToMsg); //liking a message
msgRouter.get('/get_likes/:id', _getLikes); //get number of likes per message
msgRouter.post('/add_msg', verifyToken, _addMsg); //add message
msgRouter.get('/all_msg', _allMsg); //get all messages

export default msgRouter;
