import React from "react";

import {Link} from 'react-router-dom';
import '../index.css';

function Cards() {
  return (
    <div className="App">
      <div className="text-center mt-2">
        <p>
          "Holiday is the first thing that comes to mind when we think of
          taking a break from the monotony of life. A list of packages is shown
          below....&"
        </p>
        <span className="read-more">
          "...."
          <a href="#" className="more-link">
            read more
          </a>
        </span>
      </div>
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-10">
            <Link to="/Flights">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Honeymoon-Tile-Banner1.jpg"
                className="img-fluid hover-effect"
                alt="Honeymoon"
              />
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-10">
            <Link to="/Flights">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Thailand-Tile-Banner.jpg"
                className="img-fluid hover-effect"
                alt="Thailand"
              />
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-10">
            <Link to="/Flights">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Singapore-Tile-Banner.jpg"
                className="img-fluid hover-effect"
                alt="Singapore"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-20">
            <Link to="/Flights">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Turkey-Tile-Banner.jpg"
                className="img-fluid hover-effect"
                alt="Turkey"
              />
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-20">
            <Link to="/Flights">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Hong-Kong-Tile-Banner.jpg"
                className="img-fluid hover-effect"
                alt="Hong Kong"
              />
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3 d-flex align-items-center justify-content-center">
            <div className="margin-bottom-20">
            <Link to="/Flights">
              <img
                src="https://www.thomascook.in/images/site-banners/2023/Hong-Kong-Tile-Banner.jpg"
                className="img-fluid hover-effect"
                alt="Hong Kong"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
