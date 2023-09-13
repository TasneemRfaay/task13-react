import React, { Component } from "react";
import "./child.css";
export default class Child extends Component {
  render() {
    let { src } = this.props.image;

    return (
      <>
        <div className="col-md-4 position-relative text-center d-flex justify-content-center">
          <div
            className="Layer mx-auto position-absolute d-flex align-items-center justify-content-center opacity-0"
            onClick={() => {
              this.props.clicekd(this.props.imgIndex);
            }}
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
          <img src={src} className="w-100 rounded-3 " alt="......" />
        </div>
      </>
    );
  }
}
