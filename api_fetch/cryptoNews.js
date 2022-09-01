import {db} from '../connections/db.js';

export const insertCryptoNews = () => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33a79c7126mshe2a69c62367e5abp1ecd27jsn8010148aeee9',
		'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  	}
  };
  fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
	.then(response => response.json())
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
