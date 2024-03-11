import React, { useState } from "react";

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-wrap header-1">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="index.html">
            <img src="/assets/img/safe.png" alt="logo" />
          </a>
        </div>
        <div className="header-right-area d-flex">
          <div className="main-menu d-none d-xl-block">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>

              <li>
                <a href="/about">About</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/about">What we do</a>
                  </li>
                  <li>
                    <a href="/team">Our Team</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>

              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="header-right-elements d-flex align-items-center justify-content-between">
            <div className="d-inline-block ms-4 d-xl-none">
              <div className="mobile-nav-wrap">
                <div id="hamburger" onClick={toggleMobileMenu}>
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
                        <a href="/service">Services</a>
                      </li>

                      <li>
                        <a href="/about">About</a>
                      </li>

                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
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
                    <a href="/contact" className="d-btn theme-btn">
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
