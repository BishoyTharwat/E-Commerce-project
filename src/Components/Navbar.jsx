import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar({setCartVisible, productsInCart}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand fs-4 fw-bold" to="/">
            My Store
          </NavLink>
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacts">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons-container">
              <NavLink className="btn btn-outline-dark " to="/login">
                Login
              </NavLink>
              <NavLink className="btn btn-outline-dark ms-1" to="/register">
                Register
              </NavLink>
              <NavLink className="btn btn-outline-dark ms-1" onClick={()=>setCartVisible(true)}>
                Cart({productsInCart.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
