import express from 'express';
import {
  _getCryptoNews,
} from '../controllers/cryptoNews.js';

const cryptoNewsRouter = express.Router();

cryptoNewsRouter.get('/allCryptoNews', _getCryptoNews);

export default cryptoNewsRouter;
