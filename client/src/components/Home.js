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
    let test = [1,2,3,4,5,6,7,8];
    getRandomThree(test);
    console.log(`whats left -> ${test}`);
    // fetch(`/backend/products/all`)
    // .then(res => {
    //   if(res.status === 200){
    //     return res.json();
    //   }
    // })
    // .then(data => {
    //
    //   setRandomCards(data);
    // })
    // .catch(e => {
    //   console.log(e);
    // })
  },[])

  return(
    <div>
      <h1>Welcome to my website</h1>
    </div>
  )

}

export default Home;
