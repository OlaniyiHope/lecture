import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Banner = () => {
  return (
    <body class="body-wrapper">
      <div
        className="page-banner-wrap bg-cover"
        style={{ backgroundImage: 'url("assets/img/60.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
              <div className="hero-contents pe-lg-3">
                <h1
                  className="fs-lg wow fadeInLeft animated"
                  data-wow-duration="1.3s"
                  style={{ color: "white" }}
                >
                  Serving gas industry
                </h1>
                <p
                  className="pe-lg-5 wow fadeInLeft animated"
                  data-wow-duration="1.3s"
                  data-wow-delay=".4s"
                  style={{ color: "white" }}
                >
                  Safe oil and gas is one of the leading companies in Nigeria
                  that deals with the installation and supply of gas plant LPG
                </p>

                <a
                  href="contact.html"
                  className="theme-btn me-sm-4 wow fadeInLeft"
                  data-wow-duration="1.2s"
                  data-wow-delay=".8s"
                >
                  contact us
                </a>
                <a
                  href="about.html"
                  className="plus-text-btn wow fadeInLeft"
                  data-wow-duration="1.2s"
                  data-wow-delay=".6s"
                >
                  <div className="icon">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="link-text" style={{ color: "white" }}>
                    <span>Explore</span> More about Us
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="single-slide bg-cover"
          style={{
            backgroundImage: 'url("assets/img/60.jpg")',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 ps-md-5 pe-md-5 col-xxl-7 col-lg-8 col-md-8 col-sm-10">
                <div className="hero-contents pe-lg-3">
                  <h1
                    className="fs-lg wow fadeInLeft animated"
                    data-wow-duration="1.3s"
                  >
                    Construction and Installation of gas plant LPG
                  </h1>
                  <p
                    className="pe-lg-5 wow fadeInLeft animated"
                    data-wow-duration="1.3s"
                    data-wow-delay=".4s"
                  >
                    Safe Oil and Gas is a construction and architecture company,
                    responsible for construction, installation, and sales of Gas
                    products
                  </p>
                  <a
                    href="contact.html"
                    className="theme-btn me-sm-4 wow fadeInLeft"
                    data-wow-duration="1.2s"
                    data-wow-delay=".8s"
                  >
                    contact us
                  </a>
                  <a
                    href="about.html"
                    className="plus-text-btn wow fadeInLeft"
                    data-wow-duration="1.2s"
                    data-wow-delay=".6s"
                  >
                    <div className="icon">
                      <i className="fas fa-plus"></i>
                    </div>
                    <div className="link-text">
                      <span>Explore</span> More about Us
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-nav"></div>
      </div>
    </body>
  );
};

export default Banner;
