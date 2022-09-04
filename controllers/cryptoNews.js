import {
  getCryptoNews,
} from '../modules/cryptoNews.js';

export const _getCryptoNews = (req, res) => {
  getCryptoNews()
  .then(data => {
    res.json(data);
  })
}
