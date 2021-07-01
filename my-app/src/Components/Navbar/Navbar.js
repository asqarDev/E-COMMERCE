import React, { Component, useState } from "react";
import "./Navbar.css";
import "../../assets/FA/css/all.min.css";
import { Link } from "react-router-dom";
import { Select } from "antd";
export default class Navbar extends Component {
  render() {
    const { Option } = Select;
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
      <>
        <header>
          <div className="container">
            <div className="row py-2 justify-content-between">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <a href="#" className="linkLogo">
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <div className="logo">
                      <img height="70px" src="/img/logo.png" alt="logo" />
                    </div>
                    <div className="logoh6">
                      <h6>
                        TOSHKENT IRRIGATSIYA VA QISHLOQ XO'JALIGINI
                        MEXANIZATSIYALASH MUHANDISLARI INSTITUTI
                      </h6>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center">
                <div>
                  <a href="#">
                    <i className="fas fa-user "></i> Kirish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container">
          <ul className='navbar-nav'>
          <li className="nav-item">
                  <Link
                    to="/boshsahifa"
                    className="nav-link active sahifa"
                    aria-current="page"
                  >
                    Bosh sahifa
                  </Link>
                </li>
          </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" style={{ color: "black" }}></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/Maqolalar"
                    className="nav-link"
                    aria-current="page"
                  >
                    Maqolalar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Kitoblar" className="nav-link" aria-current="page">
                    Kitoblar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/taqdimotlar"
                    className="nav-link"
                    aria-current="page"
                  >
                    Taqdimotlar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/loyihalar"
                    className="nav-link"
                    aria-current="page"
                  >
                    Loyihalar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/Tadbirlar"
                    className="nav-link"
                    aria-current="page"
                  >
                    Tadbirlar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/videolar" className="nav-link" aria-current="page">
                    Videolar
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#footer" className="nav-link" aria-current="page">
                    Bog'lanish
                  </a>
                </li>
              </ul>
              <div className="">
                <Select
                  className=""
                  defaultValue="Uzb"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="Uzb">Uzb</Option>
                  <Option value="Eng">Eng</Option>
                  <Option value="Rus">Rus</Option>
                </Select>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
