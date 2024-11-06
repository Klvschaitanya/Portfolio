import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects'
import Academics from './components/Academics'
import Home from './components/Home';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div style={{ backgroundColor: 'CaptionText' }}>


      <Navbar />
      <BrowserRouter>
        <div>    
           <Home />
          <Projects />
          <Academics />
          <hr style={{ height: '2px', backgroundColor: 'whitesmoke' }} />
          <Contact />

          <Routes>
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>


      </BrowserRouter>
    </div>
  );
};

export default App;

