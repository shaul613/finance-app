import {
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Icon,
} from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import jwt_decode from 'jwt-decode';
import {AppContext} from '../App';

const Msg = (props) => {

  const [likes, setLikes] = useState(props.likes);
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [likeIcon, setLikeIcon] = useState(<ThumbUpOffAltIcon />);
  const [unlikeIcon, setUnlikeIcon] = useState(<ThumbDownOffAltIcon />);
  const [ip, setIp] = useState();
  const [loginMsg, setLoginMsg] = useState('');
  const {accessToken} = useContext(AppContext);
  const [token, setToken] = useState({});
  const originalLikes = props.likes;

  const like = (id) => {
    if(!liked){
      fetch(`/backend/msg/like`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({id:id})
      })
      .then((res) => {
        if(res.status !== 200){
          setLoginMsg(
            <div>
              <p>Please <Link to='/login'>log in</Link> to like!</p>
            </div>
          );
        } else{
          setLikes(originalLikes+1);
          setLiked(true);
          setUnliked(false);
          setLikeIcon(<ThumbUpAltIcon />);
          setUnlikeIcon(<ThumbDownOffAltIcon />);
        }
        }
      )

    // } else{
    //   // fetch(`/backend/msg/like`,{
    //   //   method:'POST',
    //   //   headers:{
    //   //     'Content-Type':'application/json',
    //   //   },
    //   //   body:JSON.stringify({id:id})
    //   // });
    //   setLikes(likes-1);
    //   setLiked(false);
    //   setLikeIcon(<ThumbUpOffAltIcon />)
    }
  }

  // const unlike = (id) => {
  //   if(!unliked){
  //     // fetch(`/backend/msg/like`,{
  //     //   method:'POST',
  //     //   headers:{
  //     //     'Content-Type':'application/json',
  //     //   },
  //     //   body:JSON.stringify({id:id})
  //     // });
  //     setLikes(originalLikes-1);
  //     setLiked(false);
  //     setUnliked(true);
  //     setLikeIcon(<ThumbUpOffAltIcon />);
  //     setUnlikeIcon(<ThumbDownAltIcon />)
  //   } else{
  //     // fetch(`/backend/msg/like`,{
  //     //   method:'POST',
  //     //   headers:{
  //     //     'Content-Type':'application/json',
  //     //   },
  //     //   body:JSON.stringify({id:id})
  //     // });
  //     setLikes(likes+1);
  //     setUnliked(false);
  //     setUnlikeIcon(<ThumbDownOffAltIcon />);
  //   }
  // }

  return(
    <div>
      <h4>Name: {props.name}</h4>
      <h3>{props.title}</h3>
      <p id='msg_body'>{props.body}</p>
      <p>{likes} <button onClick={()=>like(props.id)}>{likeIcon}</button> {/*<button onClick={()=>unlike(props.id)}>{unlikeIcon}</button>*/}</p>
      {loginMsg}
    </div>
  )
}

export default Msg;
