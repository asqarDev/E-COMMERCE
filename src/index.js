import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './global.css';
import './assets/FA/css/all.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

ReactDOM.render(
    <React.StrictMode>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            pauseOnHover
        />
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
