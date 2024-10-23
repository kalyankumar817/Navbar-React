import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Your CSS file for styling
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services'; // Correctly importing Services
import Contact from './components/Contact'; // Correctly importing Contact

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <Router>
      <nav className="navbar nav">
        <div className="brand">@Kalyan</div>
        <button className="toggle-button" onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'} {/* Show 'X' when open, '☰' when closed */}
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
