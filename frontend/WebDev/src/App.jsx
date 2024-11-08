import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home';
import About from './components/AboutUs'; // Corrected import statement for About component
import Join from './components/JoinUs'; // If you have this component, ensure it's correctly named
import Contact from './components/Contact'; // Ensure this is the right component
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} /> {/* Added Join route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="background" />
      <div className="overlay" />
    </Router>
  );
};

export default App;
