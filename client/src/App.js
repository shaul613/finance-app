import './App.css';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import {
  useState,
  useEffect,
  createContext,
} from 'react';
import Crypto from './components/Crypto.js';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import CreditCards from './components/CreditCards';
import NotFound from './components/NotFound';
import Footer from './components/Footer.js';
import TopBar from './components/TopBar';
import Comments from './components/Comments';
import About from './components/About';
import Contact from './components/Contact';
import CryptoNews from './components/CryptoNews';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Cookies from 'js-cookie';
import {Auth} from './auth/Auth.js';

export const AppContext = createContext(null);

function App() {
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    console.log('bitcoin => ',Cookies.get('accessToken1'));
    const token = Cookies.get('accessToken1');
    if(token){
      setAccessToken(token);
    }
  }, [])
  return (
    <AppContext.Provider value={{accessToken, setAccessToken}}>
    <div className="App">
      <div id="page_container">
        <div id='content_wrap'>
          <Navbar />
          {/*<TopBar />*/}
          <Routes>
            <Route path="/*" element={<NotFound />}/>
            <Route path="/creditcards" element={<CreditCards />}/>
            <Route path="crypto" element={<Crypto />}/>
            <Route path="/" element={<Comments/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/feedback" element={<Comments/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cryptonews" element={<CryptoNews/>}/>
            <Route path="/login" element={<LoginForm title="Login" />}/>
            <Route path="/register" element={<RegisterForm title="Register" />}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
