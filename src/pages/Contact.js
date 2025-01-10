import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import useFetch from "../hooks/useFetch";
import { useLocation, Link } from "react-router-dom";
import rrll from "./safeimg.jpeg";
import "./Blog.css";
import Footer from "./Footer";
import DOMPurify from "dompurify";
import "./whatsapp.css";
import NewNav from "./NewNav";
const Contact = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/properties/find/${id}`);
  const { datePosted } = data;
  const formattedDate = new Date(datePosted).toLocaleDateString();
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(true);
  };
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
      <NewNav />
      <div
        className="page-banner-wrap bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/newsafe.png")',
        }}
      >
        <div className="container" style={{ paddingTop: "100px" }}>
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="page-heading text-white">
                <h1>Contact Us</h1>
              </div>
              <div className="breadcrumb-wrap">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-wrapper section-padding">
        <div className="container">
          <div className="row eq-height">
            <div className="col-lg-8 col-12">
              <div className="contact-form">
                <h2>Get in Touch</h2>
                <form
                  action="https://rrdevs.net/demos/html/busico/mail.php"
                  method="POST"
                  className="row"
                  id="contact-form"
                >
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <input type="text" name="phone" placeholder="Number" />
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="single-personal-info">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <div className="single-personal-info">
                      <textarea name="message" placeholder="message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 col-12">
                    <input
                      className="submit-btn"
                      type="submit"
                      value="Submit Now"
                    />
                  </div>
                </form>
                <span className="form-message"></span>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="contact-us-sidebar mt-5 mt-lg-0">
                <div className="contact-info">
                  <h2>CONTACT INFO</h2>
                  <div className="single-info">
                    <div className="icon">
                      <i className="flaticon-email"></i>
                    </div>
                    <div className="text">
                      <span>Email Us</span>
                      <h5>info@safeoilandgas.com.ng</h5>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="flaticon-phone-call-1"></i>
                    </div>
                    <div className="text">
                      <span>Call Us</span>
                      <h5>+2349134777222</h5>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="flaticon-pin"></i>
                    </div>
                    <div className="text">
                      <span>Location</span>
                      <h5>
                        i201, i202 Ogba Multipurpose Hall adjacent Sunday
                        market, along wempco, Ogba, Ikeja lagos
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
