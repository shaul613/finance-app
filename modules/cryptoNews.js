import {db} from '../connections/db.js';
import nc from 'node-cron';
import {
  fetchCryptoNews,
} from '../api_fetch/cryptoNews.js';

export const enterCryptoNews = () => {
  nc.schedule('0 * * * *', () => {
    fetchCryptoNews()
    .then(data => {
      db('crypto_news')
      .del();
      return data;
    })
    .then(data => {
      data.map(item => {
        db('crypto_news')
        .insert({
          source:item.source,
          title:item.title,
          url:item.url
        })
        .catch(e => {
          console.log(e);
        })
      })
    })
  })
}
