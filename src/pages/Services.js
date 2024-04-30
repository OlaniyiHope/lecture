import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import NewNav from "./NewNav";
import { Helmet } from "react-helmet";

const Services = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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
          content="Oil and Gas Construction Company in Nigeria, gas plant construction in Nigeria, gas plant installation in Nigeria,  gas plant construction, gas plant installation, gas plant engineering, LPG plant construction, LPG plant installation, gas tank construction, gas tank installation, gas storage facility construction, gas storage facility installation, LPG supply, bulk gas supply, CGS installation, gas tank sales, gas plant maintenance, gas plant servicing"
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
