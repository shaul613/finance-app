import {
  useNavigate,
} from 'react-router-dom';

const CryptoNewsItem = (props) => {

  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(props.url)
  // }

  return(
    <div className='news_item'>
      <a href={props.url}><button>
        <h3>{props.title}</h3>
      </button></a>
    </div>
  )
}

export default CryptoNewsItem;
