import React, { Suspense } from "react";

import ReactDOM from "react-dom";
import App from "./App";
import "./assets/FA/css/all.min.css";

import { Spinner } from "react-bootstrap";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReduser } from "./Redux/Redusers/RootRedusers";

const commonStore = createStore(
  rootReduser,
)
ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="container d-flex py-5 justify-content-center  animators">
          <Spinner animation="grow" variant="info" />
        </div>
      }
    >
    <Provider store={commonStore}>
      <App />
   </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
