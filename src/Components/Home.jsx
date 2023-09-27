import React from "react";
import Products from "./Products";
export default function Home() {
  return (
    <div className="main">
      <div className="card bg-dark text-white border-0">
        <img className="main-img" height="700px" src="/Assets/Images/bg.jpg" alt="" />
        <div className="card-img-overlay my-5">
          <div className="container text-center ">
            <h5 className="card-title display-3 fw-bolder">New Season Arrivals</h5>
            <p className="card-text display-6">
              Check Out All The Trends
            </p>
          </div>    
        </div>
      </div>
      <Products />

    </div>
  );
}
