import {db} from '../connections/db.js';
import nc from 'node-cron';
import {
  fetchCryptoNews,
} from '../api_fetch/cryptoNews.js';

export const enterCryptoNews = () => {
  fetchCryptoNews()
  .then(data => {
    db('crypto_news')
    .insert({

    })
  })
}
