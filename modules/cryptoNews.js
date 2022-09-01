import {db} from '../connections/db.js';

const insertCryptoNews = () => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '33a79c7126mshe2a69c62367e5abp1ecd27jsn8010148aeee9',
		'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  	}
  };
  fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
	.then(response => response.json())
	.then(response => console.log(response))
  // .then(() => {
  //   db('crypto_news')
  //   .insert({
  //
  //   })
  // })
	.catch(err => console.error(err));
}
