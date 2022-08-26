import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Navbar = (props) => {

  const [tabval, setTabval] = useState(0)
  return(
    <div className="navbar">

      <Tabs value={tabval} centered>
        <Button component={Link} to='/'><Tab label="Home" value='0'/></Button>
        <Button component={Link} to='/creditcards'><Tab label="Credit Cards" value='1' /></Button>
        <Button component={Link} to='/crypto'><Tab label="Crypto" value='2' /></Button>
        <Button component={Link} to='/about'><Tab label="About Us" value='3' /></Button>




      </Tabs>
    </div>
  )
}

// <Tab label="Home" />
// <Tab label="Credit Cards" />
// <Tab label="Crypto" />
// <Tab label="About Us" />

// <Stack spacing={2} direction="row">
//   <Button component={Link} to='/'><Tab label="Home" /></Button>
//   <Button component={Link} to='/creditcards'><Tab label="Credit Cards" /></Button>
//   <Button component={Link} to='/crypto'><Tab label="Crypto" /></Button>
//   <Button component={Link} to='/about'><Tab label="About Us" /></Button>
// </Stack>
export default Navbar;
