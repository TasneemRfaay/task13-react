import React, { Component } from "react";
import img1 from "../../assets/images/poert1.png";
import img2 from "../../assets/images/port2.png";
import img3 from "../../assets/images/port3.png";
import "./port.css";
import Child from "../child/Child";
export default class Portfolio extends Component {
  state = {
    imgList: [
      { src: img1 },
      { src: img2 },
      { src: img3 },
      { src: img1 },
      { src: img2 },
      { src: img3 },
    ],
  };
  clicked = (index) => {
    <div className="container-fluid">
      <img src={this.state.imgList[index].src} className="w-100 rounded-2" />
    </div>;
    console.log(this.state.imgList[index].src);
  };

  render() {
    return (
      <div className="port text-center py-5 d-flex align-items-center flex-column justify-content-center">
        <h1 className=" pt-2 fw-bolder pb-3">PORTFOLIO COMPONENT</h1>
        <div className="container w-75 mx-auto d-flex justify-content-center align-items-center">
          <div className="line"></div>

          <i className="fa-solid fa-star About-icon mx-3"></i>

          <div className="line"></div>
        </div>
        <div className="container mt-4">
          <div className="row gy-5">
            {this.state.imgList.map((image, index) => {
              return (
                <Child
                  imgIndex={index}
                  image={image}
                  clicekd={this.clicked}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
