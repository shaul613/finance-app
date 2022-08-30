import {useState, useEffect} from 'react';
import parse from 'html-react-parser';

const Crypto = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/backend/products/crypto_all`)
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
    })
    .then(data => {
      setProducts(data);
    })
    .catch(e => {
      console.log(e);
    })
  },[])
  return(
    <div>
      {
        products.map(item => {
          console.log(parse(item.trading_fees));
          return(
            <div key={item.product_id}>
              <h3>{item.product_name}</h3>
              <img src={item.product_img} alt="card-photo" className='crypto_img product_img'/>
              <p>{item.product_desc}</p>
              <p>Sign Up Bonus {item.crypto_exchange_sub}</p>
              <p>Fees: {parse(item.trading_fees)}</p>
              <p className="product_ref crypto_ref"><button><a href={item.product_ref_link} target="_blank">Sign Up</a></button></p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Crypto;
