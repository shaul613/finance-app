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
      <h1>Welcome to my website</h1>
      {
        randomCards.map(item => {
          return(
            <div key={item.product_id}>
              <h1>{item.product_name}</h1>
            </div>
          )
        })
      }
      <h1>end</h1>
    </div>
  )

}

export default Home;
