
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Order from './pages/Order'


import { Routes, Route } from "react-router-dom"




function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="order" element={ <Order /> } />
      </Routes>
     
     
      
      
       
      
    </div>
     
    
   
  );
}

export default App;
