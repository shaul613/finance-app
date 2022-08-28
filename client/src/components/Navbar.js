import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {
  Button,
  Stack,
  Tabs,
  Tab,
  AppBar,
  ToolBar,
} from '@mui/material';

const Navbar = (props) => {

  const [tabval, setTabval] = useState(0);

  const handleChange = (e, val) => {
    setTabval(val);
  }

  return(
    <div className="navbar">
      <Tabs value={tabval} onChange={handleChange} centered>
        <Tab label="Home" href='/'/>
        <Tab label="Credit Cards" href='creditcards'/>
        <Tab label="Crypto" href='crypto'/>
        <Tab label="About Us" href='about'/>
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


// <Tabs value={tabval} onChange={handleChange} centered>
//   <Button component={Link} to='/'><Tab label="Home"/></Button>
//   <Button component={Link} to='/creditcards'><Tab label="Credit Cards"/></Button>
//   <Button component={Link} to='/crypto'><Tab label="Crypto" /></Button>
//   <Button component={Link} to='/about'><Tab label="About Us" /></Button>
// </Tabs>
export default Navbar;
