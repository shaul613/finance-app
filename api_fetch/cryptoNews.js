import axios from "axios";

export const fetchCryptoNews = async () => {
  const options = {
    method: 'GET',
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': '33a79c7126mshe2a69c62367e5abp1ecd27jsn8010148aeee9',
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
    }
  };
  let response = await axios.request(options)
  return response.data
  // .then(function (response) {
  // 	console.log(response.data);
  //   return response.data;
  // })
	// .catch(err => console.error(err));
}
