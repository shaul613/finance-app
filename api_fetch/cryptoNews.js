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
    response.data.map(item => {
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
  // .then(data => {
  //
  // })
	.catch(err => console.error(err));
}
