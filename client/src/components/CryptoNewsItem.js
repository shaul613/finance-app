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
        <h2 className='news_title'>{props.title}</h2>
        <small>{props.source}</small>
      </button></a>
    </div>
  )
}

export default CryptoNewsItem;
