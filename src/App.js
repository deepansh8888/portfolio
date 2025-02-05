import './App.css';
import Home from './Home.js';
import Contact from './Contact.js';
import NavBar from './NavBar.js'
import HireMe from './HireMe.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/home' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/hireme' element={<HireMe/>} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
