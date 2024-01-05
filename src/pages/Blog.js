import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Blog.css";
import Footer from "./Footer";

const Blog = () => {
  const { data, loading, error } = useFetch("/properties?featured=true");

  return (
    <div>
      <Nav />
      <div
        className="page-banner-wrap bg-cover"
        style={{
          backgroundImage: 'url("assets/img/60.jpg")',
          height: "500px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div
                className="page-heading text-white"
                style={{ marginTop: "60px" }}
              >
                <h1>Blog News and Events</h1>
              </div>
              <div className="breadcrumb-wrap">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
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

      <div>
        <div
          id="post-items--22f3305"
          style={{ width: "90%", margin: "auto", marginTop: "50px" }}
        >
          <div className="row">
            {data &&
              data.map((item) => (
                <div
                  className="col-lg-4 col-md-4 col-sm-12 mb-4"
                  key={item?._id}
                >
                  <div className="card custom-card" style={{ height: "100%" }}>
                    <Link to={`/singleblog/${item?._id}`}>
                      <img
                        decoding="async"
                        src={item?.photos}
                        alt="Digital marketing for small biz"
                        className="card-img-top custom-card-img"
                        style={{ height: "300px" }}
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/singleblog/${item?._id}`}>
                          {item?.title}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
