import React from 'react';
import './Home.css';

function Sports() {
  return (
    <div className="sports-container">
      <h2 className="title-color">Sports in Cincinnati</h2>
      <p className="sports-text">
        Explore the vibrant sports scene in Cincinnati, from professional teams to local leagues.
        Discover the passion and excitement that sports bring to the Queen City.
      </p>
      
      {/* Images on the Left */}
      <div className="sports-images-container">
        <img src={require('./imgs/Bengals.jpg')} alt="Bengals" className="sports-image" />
        <img src={require('./imgs/Reds.png')} alt="Reds" className="sports-image" />
        <img src={require('./imgs/FCC.jpg')} alt="FCC" className="sports-image" />
        <img src={require('./imgs/Cyclones.png')} alt="Cyclones" className="sports-image" />
      </div>
    </div>
  );
}

export default Sports;