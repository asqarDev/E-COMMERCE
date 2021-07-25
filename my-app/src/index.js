import i18next from "i18next";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/FA/css/all.min.css";
import "./Redux/i18next";
import { Spinner } from "react-bootstrap";
ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="container d-flex py-5 justify-content-center  animators">
          <Spinner animation="grow" variant="info" />
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
