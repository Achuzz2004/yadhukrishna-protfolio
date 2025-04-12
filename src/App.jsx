import { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed inset-0 -z-10 min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#000000_40%,#808080_100%)]" />

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
