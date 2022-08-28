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
      {
        useEffect(() => {

          setTimeout(() => {
            navigate('/');
          }, 5000);

          setInterval(() => {
            setTime(time-1);
          }, 1000);

        })
      }
      <p>You'll be redirected to home page in {time} seconds</p>
    </div>
  )
}

export default NotFound;
