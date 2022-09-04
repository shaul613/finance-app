import {
  useState,
  useEffect,
} from 'react';
import CryptoNewsItem from './CryptoNewsItem';

const CryptoNews = (props) => {
  const [news, setNews] = useState([]);
  const [rand20, setRand20] = useState([]);

  useEffect(() => {
    fetch('/backend/cryptonews/allcryptonews')
    .then(res => res.json())
    .then(data => {
      setNews(data);
      let newArr = [];
      for(let i=0; i<20; i++){
        const nom = Math.floor(Math.random()*data.length);
        const item = data[nom];
        newArr.push(item);
        data.splice(nom, 1);
      }
      setRand20(newArr);
      console.log(rand20);
    })
  }, [])

  return(
    <div id='crypto_news'>
      {
        rand20.map(item => {
          return(

              <CryptoNewsItem
                key={item.news_id}
                title={item.title}
                url={item.url}
                source={item.source}
              />

          )
        })
      }
    </div>
  )
}

export default CryptoNews;
