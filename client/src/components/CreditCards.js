import {useState, useEffect} from 'react';

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
    <div>
      {
        products.map(item => {
          return(
            <div key={item.product_id} className="financial_product cc_product">
              <h3 className="product_title cc_title"><a href='#'>{item.product_name}</a></h3>
              <img className="product_img cc_img" src={item.product_img} alt="card-photo"/>
              <p className="product_desc cc_desc">{item.product_desc}</p>
              <p className="product_sub cc_sub">Sign Up Bonus: <br /> <b>{item.cc_sub}</b></p>
              <p className="cc_score">Credit score needed (reccomended): {item.cc_score}</p>
              <p className="product_ref cc_ref"><button><a href={item.product_ref_link} target="_blank">Sign Up</a></button></p>
            </div>
          )
        })
      }
    </div>
  )
}

export default CreditCards;
