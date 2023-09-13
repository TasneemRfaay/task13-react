import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer text-white pt-5 d-flex align-items-center flex-column justify-content-center">
          <div className="container my-5 m-auto ">
            <div className="row">
              <div className="col-md-4 text-center">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 text-center">
                <h2>AROUND THE WEB</h2>
                <i className="fa-brands fa-facebook mx-1 icon"></i>
                <i className="fa-brands fa-twitter mx-1 icon"></i>
                <i className="fa-brands fa-linkedin-in mx-1 icon"></i>
                <i className="fa-solid fa-globe mx-1 icon"></i>
              </div>
              <div className="col-md-4 text-center">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
          <div className="copyRight text-center py-5">
            <p>Copyright © Your Website 2021</p>
          </div>
        </div>
      </>
    );
  }
}
