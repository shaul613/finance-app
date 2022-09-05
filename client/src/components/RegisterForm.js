import {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextFiled from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AppContext} from '../App';

const RegisterForm = (props) => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [msg, setMsg] = useState('');

  const {setAccessToken} = useContext(AppContext);

  let navigate = useNavigate();

  const handleAction = async() => {
    try{
      const response = await axios.post('/backend/auth/register',{
        username, fname, lname, password, phone, email
      },{
        withCredentials:true,
        headers:{
          'Content-Type':'application/json'
        }
      });
    } catch(e){
      console.log(e);
    }
  }

  return(
    <div>
      <div>
        <h3>{props.title} Form</h3>
      </div>
      <Box component="form" sx={{m:1}} noValidate autoComplete="off">
        <TextFiled
          sx={{m:1}}
          id="fname"
          label="First Name"
          variant="outlined"
          onChange={(e)=>setFname(e.target.value)}
        />
        <TextFiled
          sx={{m:1}}
          id="lname"
          label="Last Name"
          variant="outlined"
          onChange={(e)=>setLname(e.target.value)}
        />
        <TextFiled
          sx={{m:1}}
          id="email"
          label="Enter Email"
          variant="outlined"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextFiled
          sx={{m:1}}
          id="phone"
          label="Enter Phone Number"
          variant="outlined"
          onChange={(e)=>setPhone(e.target.value)}
        />
        <TextFiled
          sx={{m:1}}
          id="username"
          label="Choose A Username"
          variant="outlined"
          onChange={(e)=>setUsername(e.target.value)}
        />
        <TextFiled
          sx={{m:1}}
          id="password"
          label="Choose A Password"
          variant="outlined"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={handleAction}>{props.title}</Button>
      <div>
        <p>{msg}</p>
      </div>
    </div>
  )
}

export default RegisterForm;
