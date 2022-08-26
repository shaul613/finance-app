import {useState, useEffect} from 'react';

const CreditCards = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/backend/products/all`)
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
          return(
            <div key={item.product_id}>
              <h3>{item.product_name}</h3>
              <p>{item.product_desc}</p>
              <img src={item.product_img} alt="card-photo"/>
              <p><a href={item.ref_link} target="_blank">Sign Up</a></p>
            </div>
          )
        })
      }
    </div>
  )
}

export default CreditCards;
