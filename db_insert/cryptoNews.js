import {
  insertCryptoNews,
} from '../api_fetch/cryptoNews.js';

const cryptoNewsInsert = () => {
  setInterval(() => {
    console.log('inserted news!');
    insertCryptoNews()
  }, 1000 * 60)
}

export default cryptoNewsInsert;
