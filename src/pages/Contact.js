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
        class="page-banner-wrap bg-cover"
        style={{
          backgroundImage: 'url("/assets/img/newsafe.png")',
        }}
      >
        <div class="container" style={{ paddingTop: "100px" }}>
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="page-heading text-white">
                <h1>Contact Us</h1>
              </div>
              <div class="breadcrumb-wrap">
                <nav>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-us-wrapper section-padding">
        <div class="container">
          <div class="row eq-height">
            <div class="col-lg-8 col-12">
              <div class="contact-form">
                <h2>Get in Touch</h2>
                <form
                  action="https://rrdevs.net/demos/html/busico/mail.php"
                  method="POST"
                  class="row"
                  id="contact-form"
                >
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input type="text" name="phone" placeholder="Number" />
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="single-personal-info">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>
                  <div class="col-md-12 col-12">
                    <div class="single-personal-info">
                      <textarea name="message" placeholder="message"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 col-12">
                    <input
                      class="submit-btn"
                      type="submit"
                      value="Submit Now"
                    />
                  </div>
                </form>
                <span class="form-message"></span>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="contact-us-sidebar mt-5 mt-lg-0">
                <div class="contact-info">
                  <h2>CONTACT INFO</h2>
                  <div class="single-info">
                    <div class="icon">
                      <i class="flaticon-email"></i>
                    </div>
                    <div class="text">
                      <span>Email Us</span>
                      <h5>info@example.com</h5>
                    </div>
                  </div>
                  <div class="single-info">
                    <div class="icon">
                      <i class="flaticon-phone-call-1"></i>
                    </div>
                    <div class="text">
                      <span>Call Us</span>
                      <h5>+673 853 605 985</h5>
                    </div>
                  </div>
                  <div class="single-info">
                    <div class="icon">
                      <i class="flaticon-pin"></i>
                    </div>
                    <div class="text">
                      <span>Location</span>
                      <h5>4821 Mainer St NY, USA</h5>
                    </div>
                  </div>
                </div>

                <div class="live-chat">
                  <h2>Live Chat</h2>
                  <p>You can contact us on chat and explain your problems</p>
                  <a href="#">
                    <i class="flaticon-chatting"></i> Live Chat to Executive
                  </a>
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
