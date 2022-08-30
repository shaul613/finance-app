import './App.css';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Crypto from './components/Crypto.js';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import CreditCards from './components/CreditCards';
import NotFound from './components/NotFound';
import Footer from './components/Footer.js';
import TopBar from './components/TopBar';
import Comments from './components/Comments';

function App() {
  return (
    <div className="App">
      <div id="page_container">
        <div id='content_wrap'>
          <Navbar />
          <TopBar />
          <Routes>
            <Route path="/*" element={<NotFound />}/>
            <Route path="/creditcards" element={<CreditCards />}/>
            <Route path="crypto" element={<Crypto />}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Home/>}/>
            <Route path="/feedback" element={<Comments/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
