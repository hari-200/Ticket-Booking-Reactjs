import React from "react";
import "./Footer.css"; 
import play from'./images/play.png';
import app from'./images/app.png';

const Footer = () => {
  return (
    <footer className="footer bg-light pt-4">
      <div className="container">
        <div className="row">
          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Download App</h6>
            <div className="d-flex">
              <a href="#googleplay" className="me-2">
                <img
                  src={play}
                  alt="Google Play"
                  style={{ width: "130px" }}
                />
              </a>
              <a href="#appstore">
                <img
                  src={app}
                  alt="App Store"
                  style={{ width: "120px"  }}
                />
              </a>
            </div>
          </div>

          
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Browse All</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#nowshowing" className="text-dark text-decoration-none">
                  Now Showing
                </a>
              </li>
              <li>
                <a href="#comingsoon" className="text-dark text-decoration-none">
                  Coming Soon
                </a>
              </li>
              <li>
                <a href="#movies" className="text-dark text-decoration-none">
                  Movies
                </a>
              </li>
              <li>
                <a href="#theatres" className="text-dark text-decoration-none">
                  Theatres
                </a>
              </li>
            </ul>
          </div>

        
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#register" className="text-dark text-decoration-none">
                  Register
                </a>
              </li>
              <li>
                <a href="#login" className="text-dark text-decoration-none">
                  Login
                </a>
              </li>
              <li>
                <a href="#order" className="text-dark text-decoration-none">
                  Order
                </a>
              </li>
              <li>
                <a href="#help" className="text-dark text-decoration-none">
                  Help
                </a>
              </li>
            </ul>
          </div>

          
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Theatres</h6>
            <ul className="list-unstyled">
              <li>Sakthi Cinemas - Thiruvannamalai</li>
              <li>Sakthi Cinemas - Gudiyatham</li>
              <li>Sree Shivaji Sree Vijay Cinemas</li>
              <li>Chembakassery Cinemas - Irinjalakuda</li>
              <li>VAB Theatre - Cheyyar</li>
              <li>Devi Chembakassery Cinemas - Cherpulassery</li>
            </ul>
          </div>

        
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Enquiry</h6>
            <p className="mb-1">Support Service (24x7)</p>
            <div className="d-flex align-items-center">
              <a href="#customercare" className="me-3 text-dark text-decoration-none">
                <i className="bi bi-telephone-fill"></i> Customer Care
              </a>
              <a href="#faq" className="text-dark text-decoration-none">
                <i className="bi bi-question-circle-fill"></i> FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
