import ReactDOM from "react-dom";
import App from "./App";
import "./assets/FA/css/all.min.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReduser } from "./Redux/Redusers/RootRedusers";
import React from "react";
const commonStore = createStore(
  rootReduser,
)
ReactDOM.render(
  <React.StrictMode>
     <Provider store={commonStore}>
            <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
