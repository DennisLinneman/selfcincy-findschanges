// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Cincy Finds</Link>
      <Link to="/">Home</Link>
      <Link to="/history">History</Link>
      {/* Add more links as needed */}
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {/* Add more category links as needed */}
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