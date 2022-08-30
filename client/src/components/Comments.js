import Msg from './Msg';

const Comments = (props) => {
  return(
    <div id='comments'>
      <h1>Feedback And Comments</h1>
      <p><a href='#addMsg'>Add A Comment</a></p>
      <div id="all_msg">
        {
          fetch('/hello')
          .then(res => res.json())
          .then(data => {
            data.map(item, () => {
              return(
                <div key={item.msg_id}>
                  <Msg name={item.msg_name} title={item.msg_title} body={item.msg_body}/>
                </div>
              )
            })
          })
        }
      </div>
      <div id='addMsg'>
        <h4>Add A Comment</h4>
        <p>Drop some feedback about what you like, how I can imporve, or just tell us how your day's going!</p>
        <form action='#' method='post'>
          <p>
            <label>Your Name (optional) </label><input name='name'/>
            <br />
            <small>Leave blank if you prefer to stay anonymous</small>
          </p>
          <p>
            <label>Title* </label><input name='title'/>
          </p>
          <p>
            <label>Message*</label>
            <br />
            <textarea rows='8' columns='100'></textarea>
          </p>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Comments;
