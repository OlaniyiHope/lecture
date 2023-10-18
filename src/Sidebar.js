import React, { useEffect, useState } from "react";

const Sidebar = () => {
  return (
    <section className="about-section section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-10 col-12">
            <div className="block-contents">
              <div className="section-title">
                <span> About Safe Oil and Gas Ltd</span>
                <h6>What we do</h6>
              </div>
              <p>
                We offer one of the largest construction and supply of LPG
                products and gas plant in Nigeria. We provide maintenance
                services and a strong construction and supply of gas plant and
                LPG in all six geopolitical zones in Nigeria. We continually
                develop strategic infrastructure to facilitate the operational
                efficiency of our integrated bouquet of services.
              </p>
              <p>
                <strong>Our Mission</strong> is to deliver a balanced supply of
                natural gas and energy resources and to ensure reliable
                construction of LPG gas plants in the oil and gas sector.
              </p>
              <p>
                <strong>Our Vision</strong> is to contribute and add value to
                Nigeria's oil and gas sector and to the world at large, so that
                more people can benefit.
              </p>
              <p>
                <strong>Operational Excellence</strong>: We pursue continuous
                improvement of assets and workflows through collaboration and
                exchange of ideas with internal and external stakeholders to add
                value to all parties.
              </p>
              <p>
                <strong>Safety Leadership</strong>: We are committed to
                performing all business activities in a safe and efficient
                manner. Our goal is to prevent all accidents, injuries, and
                occupational illnesses.
              </p>
            </div>
            <a href="about.html" className="plus-text-btn mt-lg-5 mt-4">
              <div className="icon">
                <i className="fas fa-plus"></i>
              </div>
              <div className="link-text">
                <span>Explore</span> More about Us
              </div>
            </a>
          </div>
          <div className="col-xl-6 col-lg-5 col-12">
            <div className="img-block-pop-video">
              <img src="assets/img/8.jpeg" alt="busico" />
              <div className="popup-video-block d-flex justify-content-center align-items-center ">
                <div className="video-play-btn">
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
  );
};

export default Sidebar;
