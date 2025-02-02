// import React from "react";
// import Nav from "./Nav";
// import { useLocation, Link } from "react-router-dom";
// import DOMPurify from "dompurify";
// import useFetch from "../hooks/useFetch";
// import "./Blog.css";
// import Footer from "./Footer";
// import backgroundImage from "./60.jpg"; //

// const Det = () => {
//   const location = useLocation();
//   const id = location.pathname.split("/")[2];
//   const { data, loading, error } = useFetch(`/properties/find/${id}`);
//   const { datePosted } = data;
//   const formattedDate = new Date(datePosted).toLocaleDateString();

//   return (
//     <div>
//       <Nav />

//       <div
//         className="bg-cover"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center center",
//           backgroundRepeat: "no-repeat",
//           position: "relative",
//           height: "600px",

//           maxWidth: "100%", // Set a max width to prevent overflow
//         }}
//       >
//         <div className="container" style={{ maxWidth: "100%" }}>
//           <div className="row">
//             <div className="col-12 col-lg-12">
//               <div
//                 className="page-heading text-white"
//                 style={{ marginTop: "260px" }}
//               >
//                 <h1
//                   style={{
//                     color: "black !important",
//                     opacity: "none",
//                     fontWeight: "1000",
//                     backgroundColor: "#ff5e14",
//                   }}
//                 >
//                   rodflkdlfkdlfkd
//                 </h1>
//               </div>
//               <div className="breadcrumb-wrap">
//                 <nav>
//                   <ol className="breadcrumb">
//                     <li
//                       className="breadcrumb-item"
//                       style={{
//                         color: "white",
//                         backgroundColor: "#ff5e14",
//                         padding: "10px",
//                       }}
//                     >
//                       Posted on the{" "}
//                       <a href="index.html" style={{ color: "white" }}>
//                         32sjksjd
//                       </a>
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className="elementor-widget-container"
//         style={{ textAlign: "Justify", width: "80%", margin: "auto" }}
//       >
//         <p>dkjkdfjkjf</p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Det;

import React from "react";
import Nav from "./Nav";
import { useLocation, Link } from "react-router-dom";
import DOMPurify from "dompurify";
import useFetch from "../hooks/useFetch";

import "./sty.css";
import Footer from "./Footer";
import backgroundImage from "./60.jpg"; //

const Det = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/properties/find/${id}`);

  //const days = dayDifference(dates[0].endDate, dates[0].startDate);

  return (
    <div>
      <Nav />

      {loading ? (
        "loading"
      ) : (
        <>
          <div className="property-details-area" style={{ paddingTop: "0" }}>
            <div className="bg-gray pd-top-100 pd-bottom-90">
              <div className="container">
                <div className="row ">
                  <div className="col-xl-9 col-lg-8">
                    {data.photos}
                    <div className="propertiesDetails">
                      <div className="propertiesDetailsTexts">
                        <h1
                          style={{
                            fontSize: 20,
                            fontWeight: 700,
                            color: "black",
                          }}
                        >
                          Description
                        </h1>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(data.desc1),
                          }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};

export default Det;
