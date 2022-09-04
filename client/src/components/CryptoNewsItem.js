import {
  useNavigate,
} from 'react-router-dom';

const CryptoNewsItem = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.url)
  }

  return(
    <div>
      <button onClick={handleClick}>
        <h3>{props.title}</h3>
      </button>
    </div>
  )
}

export default CryptoNewsItem;
