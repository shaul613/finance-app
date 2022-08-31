import Msg from './Msg';
import {
  useState,
  useEffect
} from 'react';
import {
  FormControl,
  Box,
  Button,
  TextField,
} from '@mui/material';

const Comments = (props) => {

  const [msg, setMsg] = useState([]);

  useEffect(() => {
    fetch('/backend/products/all_msg')
    .then(res => res.json())
    .then(data => {
      data.map(item => {
        setMsg(data)
      })
    })
  }, [])

  // const handleSubmit = (e) => {
  //   const form = document.getElementById('comment_form');
  //   if(form.name.value === ''){
  //     form.name.value = null;
  //     // form.name.setAttribute('value', 'Anonymous');
  //   }
  //   console.log(form.name.value);
  //   form.submit();
  // }

  // const handleNameChange = (e) => {
  //
  // }

  return(
    <div id='comments'>
      <h1>Feedback And Comments</h1>
      <p><a href='#addMsg'>Write A Comment</a></p>
      <div id="all_msg">
        {
          msg.map(item => {
            return(
              <div key={item.msg_id}>
                <Msg name={item.msg_name} title={item.msg_title} body={item.msg_body} id={item.msg_id}/>
              </div>
            )
          })
        }
      </div>
      <div id='addMsg'>
        <h4>Add A Comment</h4>
        <p>Drop some feedback about what you like, how I can imporve, or just tell us how your day's going!</p>
        <form id='comment_form' action='/backend/products/add_msg' method='post'>

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
        </form>
      </div>
    </div>
  )
}

export default Comments;
