import Msg from './Msg';
import {
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  FormControl,
  Box,
  Button,
  TextField,
} from '@mui/material';
import {AppContext} from '../App';

const Comments = (props) => {

  const [msg, setMsg] = useState([]);
  const [likes, setLieks] = useState([]);
  const [loginMsg, setLoginMsg] = useState('')
  const {accessToken} = useContext(AppContext);
  let likesArr = {};

  useEffect(() => {
    fetch('/backend/msg/all_msg')
    .then(res => res.json())
    .then(data => {
      data.map(item => {
        setMsg(data);
        })
      });


  }, [])

  useEffect(() => {
    msg.map(item => {
      fetch(`backend/msg/get_likes/${item.msg_id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        likesArr[item.msg_id] = data[0][`${item.msg_id}`];
      })
    })
    console.log(likesArr);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!accessToken){
      setLoginMsg(
        <div>
          <p>Please <Link to='/login'>log in</Link> to comment!</p>
        </div>
      );
      return;
    }
    fetch(`/backend/msg/add_msg`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        title:e.target.title.value,
        name:e.target.name.value,
        msgbody:e.target.msgbody.value
      })
    })
  }

  return(
    <div id='comments'>
      <h1>Feedback And Comments</h1>
      <p><a href='#addMsg'>Write A Comment</a></p>
      <div id="all_msg">
        {
          msg.map(item => {
            return(
              <div key={item.msg_id} className='msg'>
                <Msg name={item.msg_name} title={item.msg_title} body={item.msg_body} id={item.msg_id} likes={item.msg_likes}/>
              </div>
            )
          })
        }
      </div>
      <div id='addMsg'>
        <h4>Add A Comment</h4>
        <p>Drop some feedback about what you like, how I can imporve, or just tell us how your day's going!</p>
        {/*<form id='comment_form' action='/backend/msg/add_msg' method='post'>*/}
        <form id='comment_form' onSubmit={handleSubmit}>

          <p>
            <label>Your Name (optional) </label><input name='name' className='msg_input'/>
            <br />
            <small>Leave blank if you prefer to stay anonymous</small>
          </p>
          <p>
            <label>Title* </label><input name='title' className='msg_input' required/>
          </p>
          <p>
            <label>Message*</label>
            <br />
            <textarea name='msgbody' className='msg_input' rows='8' columns='100' maxLength='5000' required></textarea>
          </p>
          <button id='add_msg_button' variant='contained' type='submit'>Submit</button>
          {loginMsg}
        </form>
      </div>
    </div>
  )
}

export default Comments;
