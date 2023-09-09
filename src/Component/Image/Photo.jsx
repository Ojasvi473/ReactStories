import React from "react";
// import "./Photo.modules.css";
const Photo = () => {
  return (
    <>
      <div>
        <h1 style={{ marginLeft: " 18%" }}>Trending Posts</h1>
      </div>
      <div style={{ marginTop: "-1%" }}>
        <img
          style={{ marginLeft: "18%", marginTop: "3%", borderRadius: "4px" }}
          src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg"
          alt=""
        />
        <img
          style={{
            marginBottom: "25px",
            marginLeft: "1.5%",
            marginTop: "215px",
            borderRadius: " 4px",
          }}
          src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg"
          alt=""
          width="300px"
        />{" "}
        <img
          style={{
            marginBottom: "231px",
            marginLeft: "65%",
            marginTop: "-645px",
            borderRadius: "4px",
          }}
          src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg"
          alt=""
          width="300px"
        />
      </div>
    </>
  );
};

export default Photo;
