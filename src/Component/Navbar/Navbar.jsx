import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <h3 class="navbar-brand" href="#">
            EDYODA <br />
            <a>Stories</a>
          </h3> */}
      {/* <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
      {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" style={{ marginLeft: "71px" }}>
                <h3 class="navbar-brand" href="#">
                  <a style={{ fontSize: "32px", color: " #0084ff" }}>
                    {" "}
                    EDYODA{" "}
                  </a>
                  <br />
                  <a>Stories</a>
                </h3>
              </li>

              <li class="nav-item dropdown" style={{ marginLeft: "51px" }}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "black", marginTop: "21px" }}
                >
                  Explore Categories
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      Explore Categories
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Artifical Intelligence
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      DeveOps
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Programming Language
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mobile Application Development
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Techniques and Tools
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Others
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <span style={{ marginRight: "101px", color: "darkgrey" }}>
              EdYoda is a learning and knowledge <br />
              sharing platform for techies
            </span>
            <button
              style={{ borderRadius: "24px", marginRight: "41px" }}
              type="button"
              class="btn btn-primary"
            >
              Go to main website
            </button>
          </div>
        </div>
      </nav>
      <hr style={{ color: "grey", marginTop: "1px" }} /> */}
      <header>
        <div class="head">
          <h1 class="logo">EDYODA</h1>
          <h3 class="story">Stories</h3>
        </div>

        <div style={{ borderColor: " white" }} id="span">
          <select style={{ width: "15%" }}>
            <option style={{ color: "silver" }} value="">
              Explore Categories
            </option>
            <option style={{ color: "silver" }} value="">
              Artifical Intelligence
            </option>
            <option style={{ color: "silver" }} value="">
              Cloud Computing
            </option>
            <option style={{ color: "silver" }} value="">
              DevOps
            </option>
            <option style={{ color: "silver" }} value="">
              Progrmming Languages
            </option>
            <option style={{ color: "silver" }} value="">
              Mobile Application Development
            </option>
            <option style={{ color: "silver" }} value="">
              Technology and Tools
            </option>
            <option style={{ color: "silver" }} value="">
              Others
            </option>
          </select>
        </div>
        <p id="para">
          EdYoda is a learning and knowledge <br />
          sharing platform for techies
        </p>

        <p className="button">Go To Main Website</p>
      </header>
    </>
  );
};

export default Navbar;
