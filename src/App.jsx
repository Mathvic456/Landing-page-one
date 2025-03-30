import { useState } from 'react';
import './App.css';
import Hero from './pages/Hero';
import NavigationBar from './components/NavigationBar';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Spaces from './components/Spaces';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div className='body'>
      <NavigationBar/>
      <Hero />
      <AboutUs/>
      <Services/>
      <Spaces/>
      <Testimonials/>
      <Footer/>
    
    </div>
  );
}

export default App;
