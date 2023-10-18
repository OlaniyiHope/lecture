import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const Blog = () => {
  return (
    <div>
      <Nav />
      <div
        className="page-banner-wrap bg-cover"
        style={{ backgroundImage: 'url("assets/img/60.jpg")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="page-heading text-white">
                <h1>Blog News and Events</h1>
              </div>
              <div className="breadcrumb-wrap">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Blog
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
    </div>
  );
};

export default Blog;
