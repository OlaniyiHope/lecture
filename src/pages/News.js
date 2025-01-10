import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Blog.css";
import Footer from "./Footer";
import moment from "moment";
import "./whatsapp.css";
import DOMPurify from "dompurify";
import NewNav from "./NewNav";
const News = () => {
  const { data, loading, error } = useFetch("/blog?featured=true");
  console.log("Data:", data); // Log the data object
  // const formattedDate = new Date(datePosted).toLocaleDateString();
  const formattedDate = data?.datePosted
    ? new Date(data.datePosted).toLocaleDateString()
    : null;
  const [showFullContent, setShowFullContent] = useState(false);
  // const formattedDate = data?.datePosted
  //   ? new Date(data.datePosted).toLocaleDateString()
  //   : null;

  console.log("Formatted Date:", formattedDate); // Add console.log here

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
        class="page-banner-wrap bg-cover"
        style={{
          backgroundImage: 'url("assets/img/out.jpg")',
        }}
      >
        <div class="container" style={{ paddingTop: "100px" }}>
          <div class="row">
            <div class="col-12 col-lg-12">
              <div class="page-heading text-white">
                <h1>Blog</h1>
              </div>
              <div class="breadcrumb-wrap">
                <nav>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="index.html">Home</a>
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
              {data &&
                data.map((item) => (
                  <div class="blog-posts">
                    <div class="single-blog-post" key={item?._id}>
                      <div
                        class="post-featured-thumb bg-cover"
                        style={{
                          backgroundImage: `url(${item?.photos})`,
                        }}
                      ></div>
                      <div class="post-content">
                        <h2>
                          <Link to={`/singleblog/${item?.slug}`}>
                            {item?.title}
                          </Link>
                        </h2>
                        <div class="post-meta">
                          <span>
                            <i class="fal fa-calendar-alt"></i>

                            {item.datePosted
                              ? new Date(item.datePosted).toLocaleDateString()
                              : ""}
                          </span>
                        </div>
                        <p>
                          {showFullContent ? (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item.desc1),
                              }}
                            />
                          ) : (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                  `${item.desc1.slice(0, 150)}...`
                                ),
                              }}
                            />
                          )}
                        </p>

                        <div class="d-flex justify-content-between align-items-center mt-30">
                          <div class="author-info">
                            <h5>
                              <a href="#">Posted BY : {item.authorName}</a>
                            </h5>
                          </div>
                          <div class="post-link">
                            <Link to={`/singleblog/${item?.slug}`}>
                              <i class="fal fa-arrow-right"></i> Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              <div class="page-nav-wrap mt-60 text-center">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fal fa-long-arrow-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">01</a>
                  </li>
                  <li>
                    <a href="#">02</a>
                  </li>
                  <li>
                    <a href="#">..</a>
                  </li>
                  <li>
                    <a href="#">10</a>
                  </li>
                  <li>
                    <a href="#">11</a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fal fa-long-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" col-lg-4">
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
                  {data &&
                    data.map((item) => (
                      <div class="popular-posts">
                        <div class="single-post-item">
                          <div
                            class="thumb bg-cover"
                            style={{
                              backgroundImage: `url(${item?.photos})`,
                            }}
                          ></div>
                          <div class="post-content">
                            <h5>
                              <Link to={`/singleblog/${item?.slug}`}>
                                {item.title}
                              </Link>
                            </h5>
                            <div class="post-date">
                              <i class="far fa-calendar-alt"></i>
                              {formattedDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default News;
