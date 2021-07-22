import i18next from "i18next";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/FA/css/all.min.css";
import './Redux/i18next'
ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
