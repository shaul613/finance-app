import {db} from '../connections/db.js';
import nc from 'node-cron';
import {
  fetchCryptoNews,
} from '../api_fetch/cryptoNews.js';

export const enterCryptoNews = () => {
  nc.schedule('53 * * * *', () => {
    console.log('nc started on 53');
    fetchCryptoNews()
    .then(data => {
      db('crypto_news')
      .del()
      .where('news_id', '!=', 'null');
      return data;
    })
    .then(data => {
      // console.log('data');
      // console.log(data);
      data.map(item => {
        // console.log(item);
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

export const getCryptoNews = () => {
  db('crypto_news')
  .select('*')
  .returning('*')
}
