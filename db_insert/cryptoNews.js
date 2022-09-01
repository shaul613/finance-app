import {
  insertCryptoNews,
} from '../api_fetch/cryptoNews.js';

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
