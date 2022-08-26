import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = (props) => {
  return(
    <div className="navbar">
      <Tabs centered>
        <Stack spacing={2} direction="row" centered>
          <Button component={Link} to='/'><Tab label="Home" /></Button>
          <Button component={Link} to='/creditcards'><Tab label="Credit Cards" /></Button>
          <Button component={Link} to='/crypto'><Tab label="Crypto" /></Button>
          <Button component={Link} to='/about'><Tab label="About Us" /></Button>
        </Stack>
      </Tabs>
    </div>
  )
}
export default Navbar;
