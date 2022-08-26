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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/creditcards" element={<CreditCards />}/>
        <Route path="crypto" element={<Crypto />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/a" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
