import {
  Link,
  NavLink,
} from 'react-router-dom';

const Footer = (props) => {
  return(
    <div id="footer">

      <div id='footer_list'>
      <ul className='footer_list'>
        <li><Link to='/creditcards'>Credit Cards</Link></li>
        <li><Link to='/crypto'>Crypto</Link></li>
        <li><Link to='/feedback'>Comments</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/home'>Home Page</Link></li>
      </ul>
      <ul className='footer_list'>
        <li><Link to='/contact'>Contact</Link></li>
        <li><a href='https://portfolio-project-sl.herokuapp.com/' target='_blank'>My Portfolio</a></li>
        <li><Link to='/cryptonews'>Crypto News</Link></li>
        <li><Link to='/login'>Log in</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
      <ul className='footer_list'>

      </ul>
      </div>
      <small>Created with love in Tel Aviv, Israel</small>
    </div>
  )
}

export default Footer;
