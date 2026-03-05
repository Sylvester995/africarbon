import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Order from './components/Order';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { COLORS } from './theme';

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: COLORS.black, minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
           <Route path="/products" element={<Products />} />
           <Route path="/order"    element={<Order />}    />
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
         <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;