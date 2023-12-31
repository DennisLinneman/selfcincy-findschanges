import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Cincy Finds</Link>
      <Link to="/">Home</Link>
      <Link to="/">About Us</Link>
      <Link to="/">Contact Us</Link>
      
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <Link to="/nightlife">Nightlife</Link>
          <Link to="/food">Food/Drinks</Link>
          <Link to="/forecast">Forecast</Link>
          <Link to="/parking">Parking</Link>
          <Link to="/history">History</Link>
          <Link to="/sports">Sports</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
