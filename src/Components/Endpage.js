import React from "react";
import { FaFacebook, FaYoutubeSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

function Endpage() {
  return (
    <div className="bg-dark text-white mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-sm-6 mb-2">
            +9145378992
            <br />
            <span className="text-sm">(Tool-free)</span>
          </div>
          
          <div className="col-md-10 col-sm-6 d-flex justify-content-end ">
            Email:
            <br />
            <span className="text-sm">ThomasCookIndia@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-2">
            <div className="border text-center p-2 bg-white text-dark">
              ABOUT THOMAS COOK INDIA
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-2">
            <div className="border text-center p-2 bg-white text-dark">
              INTERNATIONAL HOLIDAYS
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-2">
            <div className="border text-center p-2 bg-white text-dark">
              INDIAN HOLIDAYS
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-2">
            <div className="border text-center p-2 bg-white text-dark">
              TRAVEL BLOGS
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 text-center">
        <h5 className="mt-2">Follow Us</h5>
        <p>
          <FaFacebook className="text-white" style={{ marginRight: '10px' }} />
          <FaYoutubeSquare className="text-white" style={{ marginRight: '10px' }} />
          <FaInstagram className="text-white" style={{ marginRight: '10px' }} />
          <FaLinkedin className="text-white" style={{ marginRight: '10px' }} />
        </p>
        <a href="#" className="btn btn-primary mt-2">
          Thomas Cook
        </a>
      </div>

      <div className="bg-dark text-gray-300 mt-4 py-2 text-center">
        Copyright © 2021-22 Thomascook.in. All Rights Reserved.
      </div>
    </div>
  );
}

export default Endpage;
