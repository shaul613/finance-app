

const About = (props) => {
  return(
    <div id='about'>
      <div className='about_par'>
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
      <div className='about_par'>
        <h2>What's The Purpose Of This Website?</h2>
        <p>
          This website offers information about financial products, specifically cryptocurrency and credit cards.
          Each product comes with a link to the issuer's website for more information and signing up, and some of
          those links are actually refferal links, so if you plan on signing up for a product on the site, please
          use my link, and you can also potentially get a higher sign up bonus with my link, depending on the product.
        </p>
      </div>
      <div className='about_par'>
        <h2>Why Did I Make This Website</h2>
        <p>
          I am a crypto and tech enthusiast, and it has always been my dream to create some sort of financial
          project that involves crypto, but life is busy, and I did not have the time (nor the motivation) to
          start such a huge project from scratch. Sure, I could have used one of the popular website builders, but
          that's missing the point of making my own project...
          <br />
          But that changed with an amazing opportunity... At the time, I was attending a coding bootcamp at Developers
          Institute in Tel Aviv, Israel. For our bootcamp final project, every student had to make a website suing the
          full-stack skills they aquired in their studies, and we had 2 weeks to complete this project. Yes, 2 weeks!!!
          And this was an amazing opportunity for me to put up my dream website because I have 2 weeks deticated for my
          website.
        </p>
      </div>
      <div className='about_par'>
        <h2>Did You Really Create This Site From Scratch?</h2>
        <p>
          Yes! Not completely from scratch but with a computer and text editor. I used many Node packages and
          the React framework, but I wrote all of the code ranging from simple <i>div</i> tags in my React components
          to the backend modules.
        </p>
      </div>
    </div>
  )
}

export default About
