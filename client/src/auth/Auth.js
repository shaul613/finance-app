import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AppContext} from '../App.js';

export const Auth = (props) => {
  const[redirect, setRedirect] = useState(null);
  const {setAccessToken} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async() => {
      try {
        let response = await axios.get('/backend/auth/token',{
          withCredentials:true,
          header:{
            'Content-Type':'application'
          }
        });
        console.log(response);
        if(response.status == 200){
          setRedirect(true);
        }
      } catch(e){
        navigate('/login');
      }
    }
    verify();
  },[])

  return(
    redirect ? props.children : <h1>not authorized</h1>
  )
}
