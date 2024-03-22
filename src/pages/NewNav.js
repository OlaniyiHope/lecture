import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";

import "./NewNav.css";
import { Link } from "react-router-dom";
import "./test.css";
import { useContext } from "react";

const NewNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <div style={{ background: "white" }}>
      <header id="header-wrap" style={{ backgroundColor: "white" }}>
        <div class="header-transparent" style={{ backgroundColor: "white" }}>
          <div
            class="header-main header-sticky"
            style={{ backgroundColor: "white" }}
          >
            <div class="container" style={{ backgroundColor: "white" }}>
              <div class="row align-items-center">
                <div class="col-xxl-9 col-xl-9 d-flex align-items-center col-lg-8 col-md-6 col-sm-4 col-6">
                  <div class="sasup-logo mr-35 d-inline-block">
                    <a href="/">
                      <img
                        src="/assets/img/safe.png"
                        alt="logo"
                        style={{ width: "160px", height: "60px" }}
                      />
                    </a>
                  </div>
                  <div class="sasup-header d-none d-lg-inline-block">
                    <nav id="mobile-menu">
                      <ul>
                        <li>
                          <a>
                            {" "}
                            <Link
                              to="/contact"
                              style={{ color: "#0c1636" }}
                            ></Link>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-8 col-6">
                  <div class="sasup-header-action-btn">
                    <a
                      class="sasup-transparent-btn d-none d-sm-inline-block"
                      href="/"
                    >
                      <Link
                        to="/"
                        style={{
                          color: "#0c1636",
                          fontSize: "16px",
                          fontWeight: "1000",
                        }}
                      >
                        HOME
                      </Link>
                    </a>
                    <a
                      class=" style-white ml-25 d-none d-sm-inline-block"
                      href="/about"
                    >
                      <Link
                        to="/about"
                        style={{
                          color: "#0c1636",
                          fontSize: "16px",
                          fontWeight: "1000",
                        }}
                      >
                        ABOUT
                      </Link>
                    </a>
                    <a
                      class=" style-white ml-25 d-none d-sm-inline-block"
                      href="/services"
                    >
                      <Link
                        to="/services"
                        style={{
                          color: "#0c1636",
                          fontSize: "16px",
                          fontWeight: "1000",
                        }}
                      >
                        SERVICES
                      </Link>
                    </a>{" "}
                    <a
                      class=" style-white ml-25 d-none d-sm-inline-block"
                      href="/blog"
                    >
                      <Link
                        to="/blog"
                        style={{
                          color: "#0c1636",
                          fontSize: "16px",
                          fontWeight: "1000",
                        }}
                      >
                        BLOG
                      </Link>
                    </a>
                    <a
                      class=" style-white ml-25 d-none d-sm-inline-block"
                      href="/blog"
                    >
                      <Link
                        to="/register"
                        style={{
                          color: "#0c1636",
                          fontSize: "16px",
                          fontWeight: "1000",
                        }}
                      >
                        REGISTER
                      </Link>
                    </a>
                    <a
                      class=" style-white ml-25 d-none d-sm-inline-block"
                      href="/contact"
                    >
                      <Link
                        to="/contact"
                        style={{
                          color: "#0c1636",
                          fontSize: "16px",
                          fontWeight: "1000",
                        }}
                      >
                        CONTACT
                      </Link>
                    </a>
                    <div
                      className={`mobile-bar-control mobile-bar-control-white ${
                        mobileMenuOpen ? "open" : ""
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <div
                        class="mobile-bar-control mobile-bar-control-white d-inline-block d-lg-none"
                        onClick={toggleMobileMenu}
                      >
                        <div
                          className={`line ${mobileMenuOpen ? "open" : ""}`}
                        ></div>
                        <div
                          className={`line ${mobileMenuOpen ? "open" : ""}`}
                        ></div>
                        <div
                          className={`line ${mobileMenuOpen ? "open" : ""}`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`responsive-sidebar ${mobileMenuOpen ? "open" : "close"}`}
        >
          <div className="responsive-sidebar-inner">
            {/* Mobile menu */}

            <nav className="mobile-menu">
              <div class="mm-menu">
                <ul>
                  <li className={`line ${mobileMenuOpen ? "close" : ""}`}>
                    <a href="/">
                      <img
                        src="/assets/img/safe.png"
                        alt="logo"
                        style={{
                          width: "160px",
                          height: "60px",
                          marginBottom: "50px",
                        }}
                      />
                    </a>
                  </li>

                  <li>
                    <Link to="/" style={{ color: "#0c1636" }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/about" style={{ color: "#0c1636" }}>
                        About
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/services" style={{ color: "#0c1636" }}>
                        Services
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/blog" style={{ color: "#0c1636" }}>
                        Blog
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      {" "}
                      <Link to="/register" style={{ color: "#0c1636" }}>
                        Register
                      </Link>
                    </a>
                  </li>

                  <li>
                    <a>
                      {" "}
                      <Link to="/contact" style={{ color: "#0c1636" }}>
                        Contact
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="responsive-sidebar-actions"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NewNav;
