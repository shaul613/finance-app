import {useState, useEffect} from 'react';

const Home = (props) => {
  const [randomCards, setRandomCards] = useState([]);

  // const getRandomThree = (productsArr) => {
  //   let threeRandomProducts = [];
  //   const arrLength = productsArr.length;
  //   for(let i=0; i<3 && i<arrLength; i++){
  //     const randomIndex = Math.floor(Math.random()*productsArr.length);
  //     const item = productsArr[randomIndex];
  //     threeRandomProducts.push(item);
  //     productsArr.splice(randomIndex);
  //   }
  //   console.log(threeRandomProducts);
  //   return threeRandomProducts;
  // }
  //
  // let test = [1,2,3,4,5,6,7,8];
  // getRandomThree(test);
  // console.log(test);

  // useEffect(() => {
  //   fetch(`/backend/products/all`)
  //   .then(res => {
  //     if(res.status === 200){
  //       return res.json();
  //     }
  //   })
  //   .then(data => {
  //
  //     setRandomCards(data);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   })
  // },[])
  return(
    <div>
      <h1>Welcome to my website</h1>
    </div>
  )

}

export default Home;
