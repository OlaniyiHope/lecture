import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import "./home.css";
import "./whatsapp.css";
import "./instagram.css";
import buildImage from "./build.jpeg"; // Import the image
import NewNav from "./NewNav";

const Home = () => {
  return (
    <div>
      <a
        class="header-whatsapp"
        href="https://wa.me/2349134777222"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          class="whatsapp-icon svg-primary"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.978 0-7.51 6.11-13.62 13.62-13.62 7.51 0 13.62 6.11 13.62 13.62s-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.224-0.402 0.251-0.748 0.076-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.402 0.518-0.603 0.174-0.201 0.231-0.346 0.346-0.571 0.117-0.224 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.224 2.425 3.732 5.872 5.234 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.049-0.835 2.335-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.224-0.662-0.398z"></path>
        </svg>
      </a>
      <a
        class="header-instagram"
        href="https://www.instagram.com/safeoilandgas"
        aria-label="Visit our Instagram profile"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 800 800"
          style={{ enableBackground: "new 0 0 800 800" }}
          class="instagram-icon svg-primary"
          xmlSpace="preserve"
        >
          <g id="_x31_3">
            <g>
              <g>
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="582.4734"
                  y1="565.3093"
                  x2="209.6897"
                  y2="227.5917"
                >
                  <stop offset="0" style={{ stopColor: "#FEC053" }} />
                  <stop offset="0.3273" style={{ stopColor: "#F2203E" }} />
                  <stop offset="0.6485" style={{ stopColor: "#B729A8" }} />
                  <stop offset="1" style={{ stopColor: "#5342D6" }} />
                </linearGradient>
                <path
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "url(#SVGID_1_)",
                  }}
                  d="M218.459,127.608h363.085
              c49.938,0,90.848,40.904,90.848,90.848v363.088c0,49.942-40.909,90.848-90.848,90.848H218.459
              c-49.947,0-90.851-40.906-90.851-90.848V218.456C127.608,168.512,168.512,127.608,218.459,127.608L218.459,127.608z"
                />
              </g>
              <g>
                <path
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#FFFFFF",
                  }}
                  d="M526.769,400.003c0-70.027-56.743-126.77-126.769-126.77
              c-70.027,0-126.767,56.743-126.767,126.77c0,70.023,56.74,126.767,126.767,126.767
              C470.026,526.769,526.769,470.026,526.769,400.003L526.769,400.003z M524.369,256.005c-11.316,0-20.399,9.172-20.399,20.399
              c0,11.316,9.083,20.402,20.399,20.402c11.229,0,20.398-9.086,20.398-20.402C544.768,265.177,535.599,256.005,524.369,256.005
              L524.369,256.005z M296.376,226.693h207.25c38.401,0,69.684,31.37,69.684,69.681v207.249c0,38.401-31.282,69.69-69.684,69.69
              h-207.25c-38.314,0-69.686-31.288-69.686-69.69V296.374C226.69,258.063,258.063,226.693,296.376,226.693L296.376,226.693z
              M503.626,203.463h-207.25c-51.087,0-92.913,41.826-92.913,92.91v207.249c0,51.174,41.826,92.916,92.913,92.916h207.25
              c51.171,0,92.91-41.742,92.91-92.916V296.374C596.536,245.289,554.797,203.463,503.626,203.463L503.626,203.463z
              M299.545,400.003c0-55.459,44.999-100.458,100.455-100.458s100.455,44.999,100.455,100.458
              c0,55.456-44.999,100.449-100.455,100.449S299.545,455.459,299.545,400.003L299.545,400.003z"
                />
              </g>
            </g>
          </g>
          <g id="Layer_1" />
        </svg>
      </a>

      <NewNav />

      <section class="hero-wrapper hero-2">
        <div class=" owl-theme">
          <div
            class="single-slide bg-cover"
            style={{
              backgroundImage: `url(${buildImage})`,
              paddingTop: "100px",
            }}
          >
            <div class="container">
              <div class="row">
                <div class="col-12 pe-lg-5 col-xxl-7 col-lg-9">
                  <div class="hero-contents pe-lg-3">
                    <h1
                      class="wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                    >
                      Serving gas industry
                    </h1>
                    <p
                      class="pe-lg-5 wow fadeInLeft animated"
                      data-wow-duration="1.3s"
                      data-wow-delay=".4s"
                    >
                      Safe oil and gas is one of the leading companies in
                      Nigeria that deals with the construction and installation
                      of gas plant , supply of gas tank etc
                    </p>
                    <a
                      href="/contact"
                      class="theme-btn me-sm-4 wow fadeInLeft"
                      data-wow-duration="1.2s"
                      data-wow-delay=".8s"
                    >
                      Contact us
                    </a>
                    <a
                      href="/about"
                      class="theme-btn wow fadeInLeft"
                      data-wow-duration="1.2s"
                      data-wow-delay=".6s"
                    >
                      Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="workp-process-section section-padding mtm-30">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 border-right col-xl-4 col-12">
              <div className="single-work-process-item">
                <div className="icon">
                  <i className="flaticon-construction-site"></i>
                </div>
                <div className="contents">
                  <h5>Construction</h5>
                  <p>
                    Construction and installation of Gas Plant or Skid plant and
                    LPG Auto dispenser
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 border-right col-xl-4 col-12">
              <div className="single-work-process-item">
                <div className="icon">
                  <i className="flaticon-oil-rig"></i>
                </div>
                <div className="contents">
                  <h5>Supply</h5>
                  <p>
                    Bulk supply of LPG product, PMS, AGO, LNG, CNG etc. CGS
                    centralize gas supply
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 border-right col-xl-4 col-12">
              <div className="single-work-process-item">
                <div className="icon">
                  <i className="flaticon-construction-tool-vehicle-with-crane-lifting-materials "></i>
                </div>
                <div className="contents">
                  <h5>Maintenance</h5>
                  <p>General Maintenance of Gas plant, pumps, dispenser etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about-section section-padding pt-0">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-10 col-12">
              <div class="block-contents">
                <div class="section-title">
                  <span> About Safe Oil and Gas Ltd</span>
                  <h6>What we do</h6>
                </div>
                <p>
                  We offer one of the largest construction and supply of LPG
                  products and gas plant in Nigeria, we discharge our
                  maintainance services and provide a strong construction and
                  supply of gas plant and LPG in all six geopolitical zones in
                  Nigeria. We continually develop strategic infrastructure to
                  facilitate the operational efficiency of our integrated
                  bouquet of services
                  <strong>Our Mission</strong> is to deliver a balanced supply
                  of natural gas and energy resources, to also ensure reliable
                  construction of lpg gas plant and to do better in the oil and
                  gas sector
                  <strong>Our Vision</strong> is to contribute and add value to
                  Nigeria oil and gas sector and to the world at large, so that
                  more people can benefit.
                  <p />
                  <strong>Operational Excellence</strong>
                  We pursue continuous improvement of assets and work flows
                  through collaboration and exchange of ideas with internal and
                  external stake holders add value to all parties
                </p>
                <p>
                  <strong>Safety Leadership</strong>
                  We are committed to performing all business activities in a
                  safe and efficient manner. Our goal is to prevent all
                  accidents, injuries and occupational illness.
                </p>
              </div>

              <a href="about.html" class="plus-text-btn mt-lg-5 mt-4">
                <div class="icon">
                  <i class="fas fa-plus"></i>
                </div>
                <div class="link-text">
                  <span>Explore</span> More about Us
                </div>
              </a>
            </div>
            <div class="col-xl-6 col-lg-5 col-12">
              <div class="img-block-pop-video">
                <img src="assets/img/8.jpeg" alt="busico" />
                <div class="popup-video-block d-flex justify-content-center align-items-center ">
                  <div class="video-play-btn">
                    <video width="320" height="240" controls>
                      <source src="assets/img/vid.MOV" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-service-wrapper section-padding bg-gray">
        <div className="container">
          <div className="row mtm-30">
            <div className="col-md-6 col-12 col-lg-4 mt-30">
              <div className="block-contents">
                <div className="section-title">
                  <span>02. Featured Service</span>
                  <h2>What We Offer You</h2>
                </div>
                <p>
                  Our promise as a contractor is to build strong community value
                  into every project.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4 mt-30">
              <div className="single-service-box style-1">
                <div
                  className="service-bg bg-cover"
                  style={{ backgroundImage: "url('assets/img/9.jpeg')" }}
                ></div>
                <div className="icon">
                  <i className="flaticon-blueprint"></i>
                </div>
                <div className="contents">
                  <h4>
                    <a href="services-details.html" style={{ color: "white" }}>
                      Construction
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4 mt-30">
              <div className="single-service-box style-1">
                <div
                  className="service-bg bg-cover"
                  style={{ backgroundImage: "url('assets/img/5.jpeg')" }}
                ></div>
                <div className="icon">
                  <i className="flaticon-interior-design"></i>
                </div>
                <div className="contents">
                  <h4>
                    <a href="services-details.html" style={{ color: "white" }}>
                      Installation
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4 mt-30">
              <div className="single-service-box style-1">
                <div
                  className="service-bg bg-cover"
                  style={{ backgroundImage: "url('assets/img/6.jpeg')" }}
                ></div>
                <div className="icon">
                  <i className="flaticon-home"></i>
                </div>
                <div className="contents">
                  <h4>
                    <a href="services-details.html" style={{ color: "white" }}>
                      Gas Supply
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4 mt-30">
              <div className="single-service-box style-1">
                <div
                  className="service-bg bg-cover"
                  style={{ backgroundImage: "url('assets/img/7.jpeg')" }}
                ></div>
                <div className="icon">
                  <i className="flaticon-varnish"></i>
                </div>
                <div className="contents">
                  <h4>
                    <a href="services-details.html" style={{ color: "white" }}>
                      Domestic & Industrial installation
                    </a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4 mt-30">
              <div className="single-service-box style-1">
                <div
                  className="service-bg bg-cover"
                  style={{ backgroundImage: "url('assets/img/8.jpeg')" }}
                ></div>
                <div className="icon">
                  <i className="flaticon-sketch-1"></i>
                </div>
                <div className="contents">
                  <h4>
                    <a href="services-details.html" style={{ color: "white" }}>
                      General Maintenance
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-carousel-wrapper clearfix section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xl-7 col-12">
              <div className="block-contents">
                <div className="section-title">
                  <h2>Recent Completed Projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-carousel-active owl-carousel">
          <div className="single-project-item">
            <a
              href="assets/img/project/1.jpg"
              className="project-img bg-cover bg-center popup-gallery"
              style={{ backgroundImage: "url('assets/img/32.jpeg')" }}
            >
              <div className="icon">
                <i className="fal fa-plus"></i>
              </div>
            </a>
          </div>
          <div className="single-project-item">
            <a
              href="assets/img/project/2.jpg"
              className="project-img bg-cover bg-center popup-gallery"
              style={{ backgroundImage: "url('assets/img/11.jpeg')" }}
            >
              <div className="icon">
                <i className="fal fa-plus"></i>
              </div>
            </a>
          </div>
          <div className="single-project-item">
            <a
              href="assets/img/project/3.jpg"
              className="project-img bg-cover bg-center popup-gallery"
              style={{ backgroundImage: "url('assets/img/26.jpeg')" }}
            >
              <div className="icon">
                <i className="fal fa-plus"></i>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="our-team-wrapper section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center col-12">
              <div className="block-contents">
                <div className="section-title">
                  <span>06. Skilled Team</span>
                  <h2>Meet The Expert Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4 col-12">
              <div className="single-team-member">
                <div className="team-img">
                  <img src="assets/img/40.jpeg" alt="" />
                </div>
                <div className="team-details-bar">
                  <div className="member-details">
                    <div className="member-data">
                      <span>Demola Wealth</span>
                      <h4>CEO Safe oil and gas</h4>
                    </div>
                    <div className="social-profile">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <a href="team-details.html" className="plus-btn">
                    <i className="fal fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-12">
              <div className="single-team-member">
                <div className="team-img">
                  <img src="assets/img/what.jpeg" alt="" />
                </div>
                <div className="team-details-bar">
                  <div className="member-details">
                    <div className="member-data">
                      <h3>Manager</h3>
                    </div>
                    <div className="social-profile">
                      <a href="https://facebook.com/safeoilandgas">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com/safeoilandgas">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="http://instagram.com/safeoilandgas">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <a href="team-details.html" className="plus-btn">
                    <i className="fal fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-12">
              <div className="single-team-member">
                <div className="team-img">
                  <img src="assets/img/team2.jpg" alt="" />
                </div>
                <div className="team-details-bar">
                  <div className="member-details">
                    <div className="member-data">
                      <h3>Team</h3>
                    </div>
                    <div className="social-profile">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <a href="team-details.html" className="plus-btn">
                    <i className="fal fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4 col-12">
              <div className="single-team-member">
                <div className="team-img">
                  <img src="assets/img/all2.jpeg" alt="" />
                </div>
                <div className="team-details-bar">
                  <div className="member-details">
                    <div className="member-data">
                      <h3>Secretary</h3>
                    </div>
                    <div className="social-profile">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <a href="team-details.html" className="plus-btn">
                    <i className="fal fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4 col-12">
              <div className="single-team-member">
                <div className="team-img">
                  <img src="assets/img/sup.jpg" alt="" />
                </div>
                <div className="team-details-bar">
                  <div className="member-details">
                    <div className="member-data">
                      <h3>Supervisor</h3>
                    </div>
                    <div className="social-profile">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <a href="team-details.html" className="plus-btn">
                    <i className="fal fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
