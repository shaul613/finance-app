import {
  useState,
  useEffect
} from 'react';
import {
  Icon,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const Msg = (props) => {

  const [likes, setLikes] = useState(props.likes);
  const [liked, setLiked] = useState(false);

  const like = (id) => {
    if(!liked){
      fetch(`/backend/msg/like`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
      });
      setLikes(likes+1);
      setLiked(true);
    }
  }

  return(
    <div className='msg'>
      <h4>Name: {props.name}</h4>
      <h3>{props.title}</h3>
      <p id='msg_body'>{props.body}</p>
      <p>likes: {likes}</p>
      <ThumbUpOffAltIcon />
      <button onClick={()=>like(props.id)}>Like</button>
    </div>
  )
}

export default Msg;
