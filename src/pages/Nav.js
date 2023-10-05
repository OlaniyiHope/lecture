import React from "react";

const Nav = () => {
  return (
    <header className="header-wrap header-1">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="index.html">
            <img src="assets/img/safe.png" alt="logo" />
          </a>
        </div>
        <div className="header-right-area d-flex">
          <div className="main-menu d-none d-xl-block">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="product.html">Product</a>
              </li>
              <li>
                <a href="#">
                  About <i className="fal fa-plus"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">Our Company</a>
                  </li>
                  <li>
                    <a href="team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="services.html">What we do</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="news.html">News</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header-right-elements d-flex align-items-center justify-content-between">
            <a href="#" className="side-menu-toggle d-none d-xl-block">
              <i className="fal fa-bars"></i>
            </a>
            <div className="d-inline-block ms-4 d-xl-none">
              <div className="mobile-nav-wrap">
                <div id="hamburger">
                  <i className="fal fa-bars"></i>
                </div>
                <div className="mobile-nav">
                  <button type="button" className="close-nav">
                    <i className="fal fa-times-circle"></i>
                  </button>
                  <nav className="sidebar-nav">
                    <ul className="metismenu" id="mobile-menu">
                      <li>
                        <a className="has-arrow" href="">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="product.html">product</a>
                      </li>
                      <li>
                        <a className="has-arrow" href="#">
                          About
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">Our company</a>
                          </li>
                          <li>
                            <a href="team.html">Our Team</a>
                          </li>
                          <li>
                            <a href="services.html">What we do</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="news.html">News</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="action-bar">
                    <a href="mailto:modinatheme@gmail.com">
                      <i className="fal fa-envelope"></i>
                      safeoilandgasng@gmail.com
                    </a>
                    <a href="tel:123-456-7890">
                      <i className="fal fa-phone"></i>08038763637
                    </a>
                    <a href="contact.html" className="d-btn theme-btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
