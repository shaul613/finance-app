import {
  useNavigate,
} from 'react-router-dom';

const CryptoNewsItem = (props) => {

  const navigate = useNavigate();

  // const handleClick = () => {
  //   // navigate(props.url)
  //   window.location.herf = props.url;
  // }

  return(
    <div className='news_item'>
      <a href={props.url} target='_blank' className='news_link'><button className='news_button'>
     </button></a>
      <div className='news_title'>
        <h3>{props.title}</h3>
        <small>{props.source}</small>
      </div>
    </div>
  )
}

export default CryptoNewsItem;
