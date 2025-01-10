import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import NewNav from "./NewNav";
import { Helmet } from "react-helmet";
import "./whatsapp.css";
const Services = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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
          Gas Plant Construction and Maintenance Services - Safe Oil and Gas Ltd
        </title>
        <meta
          name="description"
          content="Oil and Gas Construction Company in Nigeria, Discover our gas plant construction and maintenance services. We specialize in construction, installation, and maintenance of LPG gas plants, bulk gas supply, CGS installation, and gas tank sales."
        />
        <meta
          name="keywords"
          content="Oil and Gas Construction Company in Nigeria, gas plant construction in Nigeria, gas plant installation in Nigeria,  gas plant construction, gas plant installation, gas plant engineering, LPG plant construction in Nigeria, LPG plant installation, gas tank construction, gas tank installation, gas storage facility construction, gas storage facility installation, LPG supply, bulk gas supply, CGS installation, gas tank sales, gas plant maintenance, gas plant servicing"
        />
        <meta name="author" content="SAFE OIL AND GAS LIMITED" />
      </Helmet>
      <NewNav />
      <div>
        <div
          class="page-banner-wrap bg-cover"
          style={{
            backgroundImage: 'url("assets/img/page-banner.jpg")',
          }}
        >
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-12">
                <div class="page-heading text-white">
                  <h1>Service</h1>
                </div>
                <div class="breadcrumb-wrap">
                  <nav>
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item active" aria-current="page">
                        Service
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="our-service-wrapper section-padding bg-gray">
        <div class="container">
          <div class="row mtm-30">
            <div class="col-md-6 col-12 col-lg-4 mt-30">
              <div class="single-service-box style-1">
                <div
                  class="service-bg bg-cover"
                  // style="background-image: url('assets/img/services/1.jpg')"
                ></div>
                <div class="icon">
                  <i class="flaticon-blueprint"></i>
                </div>
                <div class="contents">
                  <h4>
                    <a href="services-details.html">
                      Constrution and INstallation of LPG Gas Plant
                    </a>
                  </h4>
                  <p>Constrution and INstallation of LPG Gas Plan.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 mt-30">
              <div class="single-service-box style-1">
                <div
                  class="service-bg bg-cover"
                  // style="background-image: url('assets/img/services/1.jpg')"
                ></div>
                <div class="icon">
                  <i class="flaticon-interior-design"></i>
                </div>
                <div class="contents">
                  <h4>
                    <a href="services-details.html">Bulk LPG gas supply</a>
                  </h4>
                  <p>Bulk LPG gas supply</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 mt-30">
              <div class="single-service-box style-1">
                <div
                  class="service-bg bg-cover"
                  // style="background-image: url('assets/img/services/1.jpg')"
                ></div>
                <div class="icon">
                  <i class="flaticon-home"></i>
                </div>
                <div class="contents">
                  <h4>
                    <a href="services-details.html">CGS Installation</a>
                  </h4>
                  <p>CGS Installatio</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 col-lg-4 mt-30">
              <div class="single-service-box style-1">
                <div
                  class="service-bg bg-cover"
                  // style="background-image: url('assets/img/services/1.jpg')"
                ></div>
                <div class="icon">
                  <i class="flaticon-varnish"></i>
                </div>
                <div class="contents">
                  <h4>
                    <a href="services-details.html">Gas tanks sales</a>
                  </h4>
                  <p>as tanks sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="pricing-cta-wrapper text-white bg-cover bg-center section-padding"
        // style="background-image: url('assets/img/pricing-cta-bg.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-12 text-center col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 ps-xl-0 pe-xl-0">
              <div class="pricing-contents">
                <h1>We Offer The Best Construction Services</h1>
                <div class="btn-wrapper d-flex align-items-end justify-content-center">
                  <a href="contact.html">Contact Us</a>
                  <div class="btn-cta">
                    <div class="icon">
                      <i class="flaticon-24-hours"></i>
                    </div>
                    <div class="content">
                      <span class="text-star">Call for support</span>
                      <h3>09134777222</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="best-featured-wrapper section-padding pb-5">
        <div class="container">
          <div class="row mtm-40 align-items-center">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-best-featured right">
                <div class="icon">
                  <i class="flaticon-flow-chart"></i>
                </div>
                <div class="content-text">
                  <h5>Technology</h5>
                  <p>
                    We are expert your all work is very nice waiting for next
                    project.
                  </p>
                </div>
              </div>
              <div class="single-best-featured right">
                <div class="icon">
                  <i class="flaticon-writing"></i>
                </div>
                <div class="content-text">
                  <h5>Core Planning</h5>
                  <p>
                    We are expert your all work is very nice waiting for next
                    project.
                  </p>
                </div>
              </div>
              <div class="single-best-featured right">
                <div class="icon">
                  <i class="flaticon-interior-design"></i>
                </div>
                <div class="content-text">
                  <h5>Project Result</h5>
                  <p>
                    We are expert your all work is very nice waiting for next
                    project.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 p-md-0 mt-5 mb-5 mt-md-0 mb-md-0 col-md-6 col-12">
              <div class="center-img text-center mbm-50">
                <img src="assets/img/man-with-cap.png" alt="" />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
              <div class="single-best-featured">
                <div class="icon">
                  <i class="flaticon-secure-shield"></i>
                </div>
                <div class="content-text">
                  <h5>Trusted Clients</h5>
                  <p>
                    We are expert your all work is very nice waiting for next
                    project.
                  </p>
                </div>
              </div>
              <div class="single-best-featured">
                <div class="icon">
                  <i class="flaticon-team"></i>
                </div>
                <div class="content-text">
                  <h5>Skilled Team</h5>
                  <p>
                    We are expert your all work is very nice waiting for next
                    project.
                  </p>
                </div>
              </div>
              <div class="single-best-featured">
                <div class="icon">
                  <i class="flaticon-profits"></i>
                </div>
                <div class="content-text">
                  <h5>Save Money</h5>
                  <p>
                    We are expert your all work is very nice waiting for next
                    project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
