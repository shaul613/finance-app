import {
  useState,
  useEffect
} from 'react';

const Msg = (props) => {

  const [likes, setLikes] = useState();

  const like = (id) => {
    fetch(`/backend/msg/like`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    });
    setLikes(likes+1);
  }

  return(
    <div className='msg'>
      <h4>Name: {props.name}</h4>
      <h3>{props.title}</h3>
      <p id='msg_body'>{props.body}</p>
      <p>likes: {likes}</p>
      <button onClick={()=>like(props.id)}>Like</button>
    </div>
  )
}

export default Msg;
