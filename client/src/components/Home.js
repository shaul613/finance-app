import {useState, useEffect} from 'react';

const Home = (props) => {
  const [randomCards, setRandomCards] = useState([]);

  const getRandomThree = (productsArr) => {
    console.log(`original array ${productsArr}`);
    let threeRandomProducts = [];
    const arrLength = productsArr.length;
    for(let i=0; i<3 && i<arrLength; i++){
      const randomIndex = Math.floor(Math.random()*productsArr.length);
      const item = productsArr[randomIndex];
      threeRandomProducts.push(item);
      productsArr.splice(randomIndex, 1);
      console.log(`i == ${i}. new arr -> ${productsArr}`);
    }
    console.log('random three -> ', threeRandomProducts);
    return threeRandomProducts;
  }

  useEffect(() => {
    fetch(`/backend/products/all`)
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
    })
  },[])

  return(
    <div>
      <h1></h1>
      <div id='three_random_cards'>
      {
        randomCards.map(item => {
          return(
            <div key={item.product_id}>
              <h3>{item.product_name}</h3>
              <img src={item.product_img} className="product_img cc_img"/>
              <p className="product_sub cc_sub">Sign Up Bonus: -placeholder- $200 {"item.product_sub"}</p>
            </div>
          )
        })
      }
      </div>
      <h1>end</h1>
    </div>
  )

}

export default Home;
