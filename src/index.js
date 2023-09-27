import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//import Font-Awesome
import "../node_modules/font-awesome/css/font-awesome.min.css";

//React Router
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
