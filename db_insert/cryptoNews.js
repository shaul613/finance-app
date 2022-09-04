import {
  fetchCryptoNews,
} from '../api_fetch/cryptoNews.js';

// response.data.map(item => {
//   db('crypto_news')
//   .insert({
//     source:item.source,
//     title:item.title,
//     url:item.url
//   })
//   .catch(e => {
//     console.log(e);
//   })
// })

const cryptoNewsInsert = () => {
  // setInterval(() => {
    console.log('inserted news!');
    insertCryptoNews()
  // }, 1000 * 10)
}

//what needs to be done?
//create seperate files for fetching and inserting to db.
//create module for deleting all news recoreds
//create method to fetch results, once successful delete results and insert new results.

export default cryptoNewsInsert;
