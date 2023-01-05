import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Singup from "./buttons/Singup";

const Header = () => {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ color: "#0D6EFD" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                  style={{ color: "#0D6EFD" }}
                >
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={{ color: "#0D6EFD" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="contact"
                  style={{ color: "#0D6EFD" }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink
              className="navbar-brand mx-auto fw-bold"
              to="/"
              style={{
                color: "#0D6EFD",
                fontSize: "2.2rem",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // border: "1px solid red",
              }}
            >
              VMobile Mart
            </NavLink>
            <Login />
            <Singup />
            <CartBtn />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
