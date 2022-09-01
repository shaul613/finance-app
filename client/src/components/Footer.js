

const Footer = (props) => {
  return(
    <div id="footer">
      <small>Created with love in Tel Aviv</small>
      <div id='footer_list'>
      <ul className='footer_list'>
        <li><a href='/creditcards'>Credit Cards</a></li>
        <li><a href='/crypto'>Crypto</a></li>
        <li><a href='/feedback'>Comments</a></li>
        <li><a href='/about'>About Us</a></li>
        <li><a href='/'>Home Page</a></li>
        <li><a href='/contact'>Crypto</a></li>
      </ul>
      <ul className='footer_list'>
        <li><a href='/contact'>Contact</a></li>
        <li><a href='https://portfolio-project-sl.herokuapp.com/' target='_blank'>My Portfolio</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Footer;
