import React, { Component } from "react";
import "./contact.css";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact text-center py-5 d-flex align-items-center flex-column justify-content-center">
        <h1 className="pt-2 fw-bolder pb-3">CONATCT SECTION</h1>
        <div className="container w-75 mx-auto d-flex justify-content-center align-items-center">
          <div className="line"></div>
          <i className="fa-solid fa-star About-icon mx-3"></i>
          <div className="line"></div>
        </div>
        <div className="container text-start">
          <form>
            <div className="form-floating pt-2 mt-5">
              <input
                type="text"
                className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"
                id="name"
                placeholder="userName"
              />
              <label htmlFor="name" className="text-success">
                UserName
              </label>
            </div>
            <div className="form-floating pt-2 mt-3">
              <input
                type="text"
                className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"
                id="floatingAge"
                placeholder="studentAge"
              />
              <label htmlFor="floatingAge" className="text-success">
                UserAge
              </label>
            </div>
            <div className="form-floating pt-2 mt-3">
              <input
                type="email"
                className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"
                id="mail"
                placeholder="Email"
              />
              <label htmlFor="mail" className="text-success">
                UserMail
              </label>
            </div>
            <div className="form-floating pt-2 mt-3">
              <input
                type="password"
                className="form-control border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched"
                id="pass"
                placeholder="UserPass"
              />
              <label htmlFor="pass" className="text-success">
                UserPassword
              </label>
            </div>
            <button className="mt-4 text-white rounded-2">
              {" "}
              send Message{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
