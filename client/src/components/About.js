

const About = (props) => {
  return(
    <div id='about'>
      <div class='about_par'>
        <h2>How Was This Site Created?</h2>
        <p>
          This site uses Node JS for its backend, React for its frontend, and Postgres for its DBMS.
          <br />
          I started off by creating a Node server with Express, followed by creating a database using
          Postgress with 1 test table (called <i>products_test</i>) and some sample data. I used my <a href='#'>Amex
          Everyday Card</a> as my test product.
          <br />
          Once my server was running on my localhost, I went ahead and created a test module for retrieving all
          prodcuts from the test table (exactly 1 credit card) to use is an API called on the frontend.
          <br />
          After confirming that my API works by testing it in the browser (by typing in 'localhost:5000/test_products'),
          I created a React app inside my server folder, and I named it <i>client</i>. I fethced my API
          and appended the data in my React component which I had named <i>Product</i>. Later I would change this
          and make seperate components for diferent financial products (credit cards, crypto, etc.) as each product
          type has its own unique properties.
          <br />
          Finally, I can move on to displaying <i>real</i> data on my website since all I have to do is implement
          what I already have dont with the data in my test table. I move forward with creating an <i>admin
          platform</i> for inserting new products into the database.
        </p>
      </div>
    </div>
  )
}

export default About
