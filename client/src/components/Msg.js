

const Msg = (props) => {
  return(
    <div className='msg'>
      <h4>Name: {props.name}</h4>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default Msg;
