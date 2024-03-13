import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import "./home.css";

import buildImage from "./build.jpeg"; // Import the image
import NewNav from "./NewNav";

const Home = () => {
  return (
    <div>
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
                      href="/cnotact"
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
