import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import PetProducts from './pages/PetProducts';
import Payments from './pages/payments';
import Adoptlist from './pages/Adoptlist';
import Navbar from './Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<PetProducts />} />
          <Route path='/payments' element={<Payments/>} />
          <Route path='/Appointments' element={<Appointments />} />
          <Route path='/adopt' element={<Adoptlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
