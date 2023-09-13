import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
export default class Master extends Component {
  render() {
    return (
      <div>
   <Navbar/>
<Outlet/>
   <Footer/>
      </div>
    );
  }
}
