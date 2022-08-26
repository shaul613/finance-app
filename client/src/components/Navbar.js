import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navbar = (props) => {
  return(
    <div>
      <Stack spacing={2} direction="row">
        <Button component={Link} to='/creditcards'>Credit Cards</Button>
        <Button component={Link} to='/crypto'>Crypto</Button>
        <Button component={Link} to='/testapi'>Home</Button>
        <Button component={Link} to='/'>Register</Button>
      </Stack>
    </div>
  )
}
export default Navbar;
