import {
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  Button,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {AppContext} from '../App';
import Cookies from 'js-cookie';

const Navbar = (props) => {

  const {accessToken, setAccessToken} = useContext(AppContext);
  const [value, setValue] = useState(false);
  const [token, setToken] = useState({});
  const [loginStatus, setLoginStatus] = useState(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if(accessToken){
  //     setLoginStatus('Log Out')
  //   } else{
  //     setLoginStatus('Log In')
  //   }
  // },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (str) => {
    navigate(`/${str}`);
  };

  // const func = () => {
  //   fetch('/backend/auth/logout',{
  //     withCredentials:true,
  //     credentials:'include'
  //   })
  //   .then(res => {
  //     if(res.status === 200){
  //       console.log('hello world');
  //     }
  //   })
  // }

  const logout = async () => {
    try {
      const response = await axios.delete('/backend/auth/logout',{},{
        withCredentials:true,
        headers:{
          'Content-Type':'application/json'
        }
      });
      Cookies.remove('accessToken1');
      if(response.status == 200 || response.status == 204){
        navigate('/login');
        setAccessToken(null)
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <div id='navbar'>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab component={Link} to='/' label="Home"/>
          <Tab component={Link} to='/crypto' label="Crypto" />
          <Tab component={Link} to='/cryptonews' label="Crypto News" />
          <Tab component={Link} to='/creditcards' label="Credit Cards"/>
          {/*<Tab component={Link} to='/loans_banking' label="Loans And Banking" />*/}
          {/*<Tab component={Link} to='/feedback' label="Feedback And Comments" />*/}
          {/*<Tab component={Link} to='/about' label="About" />
          <Tab component={Link} to='/cryptonews' label="Crypto News (coming soon!)" />*/}
          {/*Tab component={Link} to='/login' label="Login" />*/}
          {/*<Tab component={Link} to='/register' label="Register" />*/}
          <Tab component={Link} to='/login' onClick={logout} label={accessToken ? 'Log Out' : 'Log In'} />
        </Tabs>
        </div>
      </Box>
      {/*<div id='navbar_two'>
        <button className='nav_item' onClick={()=>{handleClick('')}}>Home</button>
        <button className='nav_item' onClick={()=>{handleClick('creditcards')}}>Credit Cards</button>
        <button className='nav_item' onClick={()=>{handleClick('crypto')}}>Crypto</button>
        <button className='nav_item' onClick={()=>{handleClick('cryptonews')}}>Crypto News</button>
        <button className='nav_item' onClick={()=>{handleClick('about')}}>About</button>
      </div>*/}
    </div>
  )
}

export default Navbar;
