import './App.css';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import Products from './components/Products.js';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import CreditCards from './components/CreditCards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/creditcards" element={<CreditCards />}/>
        <Route path="/testapi" element={<Products />}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
