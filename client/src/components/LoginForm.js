import {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextFiled from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AppContext} from '../App';

const LoginForm = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState('');

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
      console.log('login => ', response.data);
      setAccessToken(response.data)
      navigate('/');
    } catch(e){
      setMsg(e.response.data.msg)
    }
  }

  return(
    <div>
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
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={handleAction}>{props.title}</Button>
      <p>Don't have an account? <a href='/register'>register here!</a></p>
      <div>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default LoginForm;
