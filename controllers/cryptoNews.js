import {
  getCryptoNews,
} from '../modules/cryptoNews.js';

export const _getCryptoNews = (req, res) => {
  getCryptoNews()
  .then(data => {
    res.json(data);
  })
  .catch(e => {
    console.log(e);
    res.status(404).json({msg: '404 Not Found ', e})
  })
}
