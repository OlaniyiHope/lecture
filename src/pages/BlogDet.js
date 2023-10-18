import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { useLocation, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import useFetch from "../hooks/useFetch";
import "./Blog.css";
import Footer from "./Footer";

const BlogDet = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/properties/find/${id}`);
  const { datePosted } = data;
  const formattedDate = new Date(datePosted).toLocaleDateString();

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
              <div className="page-heading text-white">{data?.title}</div>
              <div className="breadcrumb-wrap">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <span style={{ color: "yellow" }}>Posted</span>{" "}
                        {formattedDate}
                        <span style={{ color: "yellow" }}>By</span>{" "}
                        {data?.authorName}
                      </a>
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

      <div className="elementor-widget-container">
        <div className="row">
          {data.photos?.map((photo, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
              <img src={photo} alt="" className="new" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="elementor-widget-container"
        style={{ textAlign: "justify", width: "80%", margin: "auto" }}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.desc1),
          }}
        ></p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDet;
