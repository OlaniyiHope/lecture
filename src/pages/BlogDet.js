import React from "react";
import Nav from "./Nav";
import { useLocation, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import useFetch from "../hooks/useFetch";
import "./Blog.css";
import Footer from "./Footer";
import backgroundImage from "./60.jpg"; //

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
        className="bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          height: "600px",
          maxWidth: "100%", // Set a max width to prevent overflow
        }}
      >
        <div className="container" style={{ maxWidth: "100%" }}>
          <div className="row">
            <div className="col-12 col-lg-12">
              <div
                className="page-heading text-white"
                style={{ marginTop: "260px" }}
              >
                <h1>{data.title}</h1>
              </div>
              <div className="breadcrumb-wrap">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item" style={{ color: "white" }}>
                      Posted on the{" "}
                      <a href="index.html" style={{ color: "white" }}>
                        {formattedDate}
                      </a>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                      style={{ color: "white" }}
                    >
                      By {data.authorName}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="elementor-widget-container text-center">
        <div className="row">
          {data.photos?.map((photo, i) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={i}
              style={{ margin: "auto" }}
            >
              <img src={photo} alt="" className="new" />
            </div>
          ))}
        </div>
      </div>

      <div
        className="elementor-widget-container"
        style={{ textAlign: "Justify", width: "80%", margin: "auto" }}
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
