import {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextFiled from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AppContext} from '../App';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

const LoginForm = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState('');
  const [exp, setExp] = useState();

  const {setAccessToken} = useContext(AppContext);

  let navigate = useNavigate();



  const handleAction = async() => {
    try{
      const response = await axios.post('/backend/auth/login',{
        username, password
      },{
        withCredentials:true,
        headers:{
          'Content-Type':'application/json'
        }
      });
      setAccessToken(response.data);
      // try{
      //   const decode = jwt_decode(response.data);
      //   setExp(decode.exp);
      //   console.log(exp);
      // } catch(e){
      //   console.log(e);
      // }
      Cookies.set('accessToken1', response.data, {expires:1})
      navigate('/');
    } catch(e){
      setMsg(e.response.data.msg)
    }
  }

  return(
    <div className='login_register_form'>
      <div>
        <h3>{props.title} Form</h3>
      </div>
      <Box component="form" sx={{m:1}} autoComplete="off">
        <TextFiled
          sx={{m:1}}
          id="username"
          label="Username"
          variant="outlined"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <TextFiled
          sx={{m:1}}
          id="password"
          label="Enter Password"
          variant="outlined"
          type='password'
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Box>
      <div className='auth_error'>
        <p>{msg}</p>
      </div>
      <Button variant="contained" onClick={handleAction}>{props.title}</Button>
      <p>Don't have an account? <Link to='/register'>register here!</Link></p>

    </div>
  )
}

export default LoginForm;
