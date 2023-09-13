import React, { Component } from "react";
import "./about.css";
export default class About extends Component {
  render() {
    return (
      <div className="about text-white text-center py-5 d-flex align-items-center flex-column justify-content-center">
        <h1 className="mt-5 pt-5 fw-bolder pb-3">ABOUT COMPONENT</h1>
        <div className="container w-75 mx-auto d-flex justify-content-center align-items-center">
          <div className="line bg-white "></div>
          <i className="fa-solid fa-star About-icon mx-3"></i>
          <div className="line bg-white"></div>
        </div>
        <div className="container w-75 d-flex justify-content-center align-content-center mb-5 pb-5 pt-3">
          <div className="w-50 me-3 mb-5 pb-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div className="w-50 ms-3 mb-5 pb-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
