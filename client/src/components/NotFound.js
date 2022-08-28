import {
  useNavigate,
} from 'react-router-dom';

import {
  useEffect,
  useState,
} from 'react';

const NotFound = (props) => {

  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  return(
    <div>
      <h1>404: Page Not Found</h1>
      <p><a href='/'>Click here to go back to home page</a></p>
    </div>
  )
}

export default NotFound;
