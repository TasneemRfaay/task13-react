import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeSize = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeSize);
  return (
    <>
      <nav
        className={
          navbar
            ? "navbar py-2 navbar-expand-lg text-white  position-sticky top-0 w-100 "
            : "navbar py-5 navbar-expand-lg text-white  position-sticky top-0 w-100"
        }
      >
        <Link className="navbar-brand ms-5 m-3 p-2" to="about">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse position-relative me-5"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 position-absolute end-0 me-5">
            <li className="nav-item active mx-2">
              <Link className="nav-link" to="about">
                ABOUT <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="port">
                PORTFOLIO
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
