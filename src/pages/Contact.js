import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import useFetch from "../hooks/useFetch";
import { useLocation, Link } from "react-router-dom";
import rrll from "./safeimg.jpeg";
import "./Blog.css";
import Footer from "./Footer";
import DOMPurify from "dompurify";
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
      <Nav />
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
