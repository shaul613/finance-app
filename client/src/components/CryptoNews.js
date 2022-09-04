import {
  useState,
  useEffect,
} from 'react';
import CryptoNewsItem from './CryptoNewsItem';

const CryptoNews = (props) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/backend/cryptonews/allcryptonews')
    .then(res => res.json())
    .then(data => {
      setNews(data);
    })
  }, [])
  return(
    <div>
      {
        news.map(item => {
          return(
            <div key={item.news_id}>
              <CryptoNewsItem title={item.title} url={item.url}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default CryptoNews;
