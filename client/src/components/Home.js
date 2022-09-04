import {useState, useEffect} from 'react';
import {
  Button,
} from '@mui/material';
import TopBar from './TopBar';

const Home = (props) => {
  const [randomCards, setRandomCards] = useState([]);
  const [randomCrypto, setRandomCrypto] = useState([]);

  const getRandomThree = (productsArr) => {
    // console.log(`original array ${productsArr}`);
    let threeRandomProducts = [];
    const arrLength = productsArr.length;
    for(let i=0; i<3 && i<arrLength; i++){
      const randomIndex = Math.floor(Math.random()*productsArr.length);
      const item = productsArr[randomIndex];
      threeRandomProducts.push(item);
      productsArr.splice(randomIndex, 1);
      // console.log(`i == ${i}. new arr -> ${productsArr}`);
    }
    // console.log('random three -> ', threeRandomProducts);
    return threeRandomProducts;
  }

  useEffect(() => {
    fetch(`/backend/products/cc_all`)
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
    })
    .then(data => {
      const cards = getRandomThree(data);
      setRandomCards(cards);
    })
    .catch(e => {
      console.log(e);
    });
    fetch(`/backend/products/crypto_all`)
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
    })
    .then(data => {
      const cards = getRandomThree(data);
      setRandomCrypto(cards);
    })
    .catch(e => {
      console.log(e);
    });
  },[])

  return(
    <div>
      <TopBar />
      <div className='random_crypto_list'>
        <div className='three_random_cards'>
        {
          randomCrypto.map(item => {
            return(
              <div key={item.crypto_exchange_id} className="home_page_crypto home_page_item">
                {<h3><a href={item.product_ref_link} target='_blank'>{item.product_name}</a></h3>}
                <img src={item.product_img} className="product_img crypto_img"/>
                <p className="product_sub crypto_sub"><b>Sign Up Bonus: {item.crypto_exchange_sub}</b></p>
                <p><a href={item.product_ref_link}>Sign Up!</a></p>
              </div>
            )
          })
        }
        </div>
        <button className="home_page_button"><a href='/crypto'>See All Crypto Exchanges</a></button>
      </div>
      <div className='random_cards_list'>
        <div className='three_random_cards'>
        {
          randomCards.map(item => {
            return(
              <div key={item.cc_id} className="home_page_card home_page_item">
                <h3><a href={item.product_ref_link} target='_blank'>{item.product_name}</a></h3>
                <img src={item.product_img} className="product_img cc_img"/>
                <p className="product_sub cc_sub"><b>Sign Up Bonus: {item.cc_sub}</b></p>
                <p><a href={item.product_ref_link}>Get Card!</a></p>
              </div>
            )
          })
        }
        </div>
        <button className="home_page_button"><a href='/creditcards'>See All Cards</a></button>
      </div>


    </div>
  )

}

export default Home;
