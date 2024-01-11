import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Holidays from "../Pages/Holidays";
import Hotels from "../Pages/Hotels";
import Flights from "../Pages/Flights";
import Signup from "../Signup";
import '../Navbar.css'; // Create a CSS file for styling


const Navbar = () => {
  return (
    <Router>
      <div className="App">
  <nav className="navbar navbar-expand-lg navbar-light mb-2" style={{ backgroundColor: '#4d56bf' }}>
    <a className="navbar-brand" href="#">
      <img src="https://www.thomascook.in/images/logo.jpg" alt="Logo" style={{ width: '50%', height: '60px', marginLeft: '15px', marginRight: '15px' }} />
    </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/holiday" className="nav-link text-white" activeClassName="active-link">
            <i className="fas fa-gift"></i> Holiday
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="#" className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/hotels" className="dropdown-item">Hotels</Link></li>
            <li><Link to="/flights" className="dropdown-item">Flights</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/forex" className="nav-link text-white" activeClassName="active-link">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  </nav>

  <Routes>
    <Route path="/holiday" element={<Holidays />} />
    <Route path="/forex" element={<Signup />} />
    <Route path="/hotels" element={<Hotels />} />
    <Route path="/flights" element={<Flights />} />
  </Routes>
</div>

    </Router>
  );
};

export default Navbar;
