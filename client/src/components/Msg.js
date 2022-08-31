

const Msg = (props) => {
  return(
    <div className='msg'>
      <h4>Name: {props.name}</h4>
      <h3>{props.title}</h3>
      <p id='msg_body'>{props.body}</p>
    </div>
  )
}

export default Msg;
