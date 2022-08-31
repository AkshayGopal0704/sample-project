import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import Collections from './Components/Collections';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Components/Contact';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/collections' element={<Collections />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      
      </Routes>
      <Footer />
     
      </BrowserRouter>
    
    </div>
    
  );
}

export default App;
