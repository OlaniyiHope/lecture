import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import useFetch from "../hooks/useFetch";
import { useLocation, Link, useHistory, useNavigate } from "react-router-dom";
import rrll from "./safeimg.jpeg";
import "./Blog.css";
import Footer from "./Footer";
import DOMPurify from "dompurify";
const NewsDet = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`/properties/find/${id}`);

  const { datePosted } = data;
  const formattedDate = data.datePosted
    ? new Date(data.datePosted).toLocaleDateString()
    : null;
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    if (data && data.title) {
      document.title = data.title;

      // Update the URL with the title
      const titleSlug = data.title.toLowerCase().replace(/\s+/g, "-");
      navigate(`/singleblog/${titleSlug}`, { replace: true });
    }
  }, [data, navigate]);

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
                <h1>{data.title}</h1>
              </div>
              <div class="breadcrumb-wrap">
                <nav>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Blog
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="blog-wrapper news-wrapper section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-8">
              <div class="blog-posts">
                <div class="single-blog-post">
                  <h2>
                    <p>{data?.title}</p>
                  </h2>
                  <div
                    class="post-featured-thumb bg-cover"
                    style={{
                      backgroundImage: `url(${data?.photos})`,
                    }}
                  ></div>
                  <div class="post-content">
                    <h2>{data.title}</h2>
                    <div class="post-meta">
                      <span>
                        <i class="fal fa-calendar-alt"></i>
                        {formattedDate}
                      </span>
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(data.desc1),
                      }}
                    ></p>

                    <div class="d-flex justify-content-between align-items-center mt-30">
                      <div class="author-info">
                        <h5>
                          <a href="#">Posted BY : {data.authorName}</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="main-sidebar">
                <div class="single-sidebar-widget author-box-widegts">
                  <div class="wid-title">
                    <h3>About Us</h3>
                  </div>
                  <div class="author-info text-center">
                    <p>
                      We are Safe Oil and Gas. we are a leading provider of
                      comprehensive LPG tanks. With a commitment to excellence,
                      safety, and compliance with both local and international
                      standards, we specialize in the construction and
                      installation of LPG plants tailored to meet the unique
                      needs of our clients. Our experienced team of engineers
                      and construction professionals are well-versed in the
                      intricacies of LPG plant construction. We ensure that
                      every project adheres to the highest standards of quality,
                      safety, and environmental responsibility.
                    </p>
                    <div class="social-profile">
                      <a href="https://facebook.com/safeoilandgas">
                        <i class="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com/safeoilandgas">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="https://insagram.com/safeoilandgas">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="https://linkedin.com/in/safeoilandgas">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://youtube.com/safeoilandgas">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="single-sidebar-widget">
                  <div class="wid-title">
                    <h3>Latest News</h3>
                  </div>
                  <div class="popular-posts">
                    <div class="single-post-item">
                      <div
                        class="thumb bg-cover"
                        style={{
                          backgroundImage: `url(${data?.photos})`,
                        }}
                      ></div>
                      <div class="post-content">
                        <h5>{data.title}</h5>
                        <div class="post-date">
                          <i class="far fa-calendar-alt"></i>
                          {formattedDate}
                        </div>
                      </div>
                    </div>
                  </div>
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

export default NewsDet;
