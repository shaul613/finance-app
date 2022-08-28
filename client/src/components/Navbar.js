import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import {
  useState,
  useEffect,
} from 'react';
import {
  Button,
  Stack,
  Tabs,
  Tab,
  AppBar,
  ToolBar,
  Box,
} from '@mui/material';

const Navbar = (props) => {

  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab component={Link} to='/' label="Home"/>
        <Tab component={Link} to='/creditcards' label="Credit Cards"/>
        <Tab component={Link} to='/crypto' label="Crypto" />
        <Tab component={Link} to='/about' label="About Us" />
      </Tabs>
    </Box>
  )

  // const [tabval, setTabval] = useState(0);
  //
  // const handleChange = (e, val) => {
  //   setTabval(val);
  // }
  //
  // return(
  //   <div className="navbar">
  //
  //   </div>
  // )
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
  // <Button component={Link} to='/'><Tab label="Home"/></Button>
  // <Button component={Link} to='/creditcards'><Tab label="Credit Cards"/></Button>
  // <Button component={Link} to='/crypto'><Tab label="Crypto" /></Button>
  // <Button component={Link} to='/about'><Tab label="About Us" /></Button>
// </Tabs>
export default Navbar;
