import React, { useEffect, useState } from "react";
import NewNav from "./NewNav";
import "./whatsapp.css";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
const About = () => {
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
      <Helmet>
        <title>
          About Safe Oil and Gas Ltd - Providing Gas Plant Construction and
          Maintenance Services
        </title>
        <meta
          name="description"
          content="Learn about Safe Oil and Gas Ltd, Oil and Gas Construction Company in Nigeria, a provider of gas plant construction, gas tank supply, and gas product supply services in Nigeria. Discover our mission, vision, and commitment to operational excellence and safety leadership."
        />
        <meta
          name="keywords"
          content="Oil and Gas Construction Company in Nigeria, gas plant construction, gas tank supply, gas product supply, gas plant maintenance, gas plant servicing, pump maintenance, dispenser maintenance, gas equipment maintenance, gas system maintenance, gas facility maintenance, gas plant construction services in Nigeria, gas tank supply in Nigeria, gas plant maintenance in Nigeria, gas supply company in Nigeria"
        />
        <meta name="author" content="SAFE OIL AND GAS LIMITED" />
      </Helmet>
      <NewNav />
      <div
        className="page-banner-wrap bg-cover"
        style={{ backgroundImage: 'url("assets/img/60.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="page-heading text-white">
                <h1>About us</h1>
              </div>
              <div className="breadcrumb-wrap">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      about us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="about-section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-12 pe-xl-0">
              <div
                className="about-cover-bg bg-cover me-xl-5"
                style={{
                  backgroundImage: 'url("assets/img/home2/about-cover.jpg")',
                }}
              >
                <div className="our-experience-years">
                  <div className="year-outline">
                    <h2>10</h2>
                  </div>
                  <p>
                    Years <span>In business</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-12">
              <div className="block-contents">
                <div className="section-title">
                  <span>About Safe oil and gas ltd</span>
                  <h2>What we do</h2>
                </div>
                <p>
                  We offer one of the largest construction and supply of LPG
                  products and gas plant in Nigeria, we discharge our
                  maintenance services and provide a strong construction and
                  supply of gas plant and LPG in all six geopolitical zones in
                  Nigeria. We continually develop strategic infrastructure to
                  facilitate the operational efficiency of our integrated
                  bouquet of services.
                </p>
                <p>
                  <strong>Our Mission</strong> is to deliver a balanced supply
                  of natural gas and energy resources, to also ensure reliable
                  construction of LPG gas plant and to do better in the oil and
                  gas sector.
                  <strong>Our Vision</strong> is to contribute and add value to
                  Nigeria oil and gas sector and to the world at large, so that
                  more people can benefit.
                </p>
                <p>
                  <strong>Operational Excellence</strong>
                  We pursue continuous improvement of assets and workflows
                  through collaboration and exchange of ideas with internal and
                  external stakeholders add value to all parties
                </p>
                <p>
                  <strong>Safety Leadership</strong>
                  We are committed to performing all business activities in a
                  safe and efficient manner. Our goal is to prevent all
                  accidents, injuries, and occupational illness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fun-fact-wrapper text-white theme-bg pt-70 pb-100 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 border-line mt-30 col-12">
              <div className="single-fun-fact">
                <h2>
                  <span>20</span>K+
                </h2>
                <h3>PROJECT DONE</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 border-line mt-30 col-12">
              <div className="single-fun-fact">
                <h2>
                  <span>100</span>+
                </h2>
                <h3>HAPPY CLIENTS</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 border-line mt-30 col-12">
              <div className="single-fun-fact">
                <h2>
                  <span>10</span>+
                </h2>
                <h3>Skilled Employee</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skill-wrapper section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 ps-lg-5 col-lg-6 col-12">
              <div
                className="video-popup-wrapper skill-video d-flex justify-content-center align-items-center bg-cover bg-center"
                style={{ backgroundImage: 'url("assets/img/faq-bg.jpg")' }}
              >
                <div className="video-play-btn">
                  <a
                    href="https://www.youtube.com/watch?v=E1xkXZs0cAQ"
                    className="popup-video play-video"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 ps-lg-5 col-lg-6 col-12">
              <div
                className="video-popup-wrapper skill-video d-flex justify-content-center align-items-center bg-cover bg-center"
                style={{ backgroundImage: 'url("assets/img/faq-bg.jpg")' }}
              >
                <div className="video-play-btn">
                  <a
                    href="https://www.youtube.com/watch?v=E1xkXZs0cAQ"
                    className="popup-video play-video"
                  >
                    <i className="fas fa-play"></i>
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

export default About;
