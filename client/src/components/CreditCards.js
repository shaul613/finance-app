import {useState, useEffect} from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
} from '@mui/material'

const CreditCards = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/backend/products/cc_all`)
    .then(res => {
      if(res.status === 200){
        return res.json();
      }
    })
    .then(data => {
      console.log(data);
      setProducts(data);
    })
    .catch(e => {
      console.log(e);
    })
  },[])
  return(
    <div className='product_list'>
      {
        products.map(item => {
          return(
            <div key={item.product_id} className='card_item product_item'>
            <h3 className="product_title cc_title"><a href='#'>{item.product_name}</a></h3>
              <div className="financial_product cc_product">
                <div className='product_title_img'>
                  <img className="product_img cc_img" src={item.product_img} alt="card-photo"/>
                </div>
                <div className='card_details'>
                  <p className="product_desc cc_desc">{item.product_desc}</p>
                  <p className="product_sub cc_sub">Sign Up Bonus: <br /> <b>{item.cc_sub}</b></p>
                  <p className="cc_score">Credit score needed (reccomended): {item.cc_score}</p>
                </div>
              </div>
              <p className="product_ref cc_ref"><Button href={item.product_ref_link} target="_blank">Sign Up</Button></p>

            </div>
          )
        })
      }
    </div>
  )
}

export default CreditCards;
