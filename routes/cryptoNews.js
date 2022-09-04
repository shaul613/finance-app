import express from 'express';
import {
  _getCryptoNews,
} from '../controllers/cryptoNews.js';

const cryptoNewsRouter = express.Router();

cryptoNewsRouter.get('/allcryptonews', _getCryptoNews);

export default cryptoNewsRouter;
