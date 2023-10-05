import React from "react";

const Footer = () => {
  return (
    <footer className="footer-1 footer-wrap">
      <div className="footer-widgets-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 pe-xl-0 col-sm-6 col-12">
              <div className="single-footer-wid site_info_widget">
                <div className="wid-title">
                  <h3>Get In Touch</h3>
                </div>
                <div className="contact-us">
                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fal fa-phone"></i>
                    </div>
                    <div className="contact-info">
                      <p>08038763637</p>
                      <p>08146437416</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="contact-info">
                      <p>safeoilandgasng@gmail.com</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-info">
                      <p>i201, i202 Ogba Multipurpose Hall</p>
                      <p>
                        adjacent Sunday market, along wempco, Ogba, Ikeja lagos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 offset-xl-1 col-xl-3 ps-xl-5 col-12">
              <div className="single-footer-wid">
                <div className="wid-title">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="about.html">About Company</a>
                  </li>
                  <li>
                    <a href="services.html">Our Services</a>
                  </li>
                  <li>
                    <a href="services.html">Our products</a>
                  </li>
                  <li>
                    <a href="services.html">Our teams</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-xl-4 offset-xl-1 col-12">
              <div className="single-footer-wid newsletter_widget">
                <div className="wid-title">
                  <h3>Newsletter</h3>
                </div>
                <div className="newsletter_box">
                  <form action="#">
                    <i className="fal fa-envelope"></i>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      required
                    />
                    <button className="submit-btn" type="submit">
                      Subscribe Now <i className="fas fa-paper-plane"></i>
                    </button>
                  </form>
                  <p>
                    Opening Hours: <b>Mon - Sun: 9:00 AM - 10 PM</b>
                  </p>
                  <div className="col-md-4 col-lg-4 col-12">
                    <div className="footer-social-icon ms-md-5 text-lg-md-end">
                      <a href="https://facebook.com/safeoilandgas">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://instagram.com/safeoilandgas">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 text-center text-md-start">
              <div className="copyright-info">
                <p>&copy; 2022 Copyright By Safe Oil and Gas Global Ltd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
