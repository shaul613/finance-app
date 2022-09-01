import {db} from '../connections/db.js';
import axios from "axios";

export const insertCryptoNews = () => {
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': '33a79c7126mshe2a69c62367e5abp1ecd27jsn8010148aeee9',
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
  	console.log(response.data);
  })
  .then(data => {
    db('crypto_news')
    .del()
    .then(() => {
      db('cryptoNews')
      .insert({
        source:data.source,
        title:data.title,
        url:data.url
      })
      .returning('*')
    })
  })
	.catch(err => console.error(err));
}
