

const Msg = (props) => {

  const like = (id) => {
    // fetch(`/something`,{
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'application/json',
    //   },
    //   body: JSON.stringify({name:addedItem, price:addedItemPrice})
    // })
    console.log('hello');
  }
  return(
    <div className='msg'>
      <h4>Name: {props.name}</h4>
      <h3>{props.title}</h3>
      <p id='msg_body'>{props.body}</p>
      <button onClick={()=>like(props.id)}></button>
    </div>
  )
}

export default Msg;
