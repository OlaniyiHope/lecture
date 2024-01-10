import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Blog.css";
import Footer from "./Footer";
import DOMPurify from "dompurify";
const News = () => {
  const { data, loading, error } = useFetch("/properties?featured=true");
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
          backgroundImage: 'url("assets/img/newsafe.png")',
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
      {data &&
        data.map((item) => (
          <section class="blog-wrapper news-wrapper section-padding">
            <div class="container">
              <div class="row">
                <div class="col-12 col-lg-8">
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
                          <Link to={`/singleblog/${item?._id}`}>
                            {item?.title}
                          </Link>
                        </h2>
                        <div class="post-meta">
                          <span>
                            <i class="fal fa-calendar-alt"></i>
                            {formattedDate}
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
                            <Link to={`/singleblog/${item?._id}`}>
                              <i class="fal fa-arrow-right"></i> Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div class="col-12 col-lg-4">
                  <div class="main-sidebar">
                    <div class="single-sidebar-widget author-box-widegts">
                      <div class="wid-title">
                        <h3>About Us</h3>
                      </div>
                      <div class="author-info text-center">
                        <p>
                          We are Safe Oil and Gas. we are a leading provider of
                          comprehensive LPG tanks. With a commitment to
                          excellence, safety, and compliance with both local and
                          international standards, we specialize in the
                          construction and installation of LPG plants tailored
                          to meet the unique needs of our clients. Our
                          experienced team of engineers and construction
                          professionals are well-versed in the intricacies of
                          LPG plant construction. We ensure that every project
                          adheres to the highest standards of quality, safety,
                          and environmental responsibility.
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
                              backgroundImage: `url(${item?.photos})`,
                            }}
                          ></div>
                          <div class="post-content">
                            <h5>
                              <Link to={`/singleblog/${item?._id}`}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      <Footer />
    </div>
  );
};

export default News;
