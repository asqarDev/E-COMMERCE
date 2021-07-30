import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../../assets/FA/css/all.min.css";
import { Link } from "react-router-dom";
import { Select } from "antd";

export default function Navbar() {
  const login = "Kirish";
  const hoompage = "Bosh sahifa";
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  

  return (
    {handleClick}=props,
    <>
      <header>
        <div className="container">
          <nav style={{width:'100%',padding:'2rem 0',backgroundColor:'grey'}}>
            <button onClick={()=>props.handleClick('uz')}>
                Uzbekcha
            </button>
            <button onClick={()=>handleClick('ru')}>
                Russin
            </button>
            <button onClick={()=>handleClick('en')}>
                English
            </button>
          </nav>
          <div className="row py-2 justify-content-between">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <a href="http://staff.tiiame.uz/" className="linkLogo">
                <div className="d-flex justify-content-between w-100 align-items-center">
                  <div className="logo">
                    <img height="70px" src="/img/logo.png" alt="logo" />
                  </div>
                  <div className="logoh6">
                    <h6>{t('Thanks.1')}</h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center">
              <div>
                <a href="https://morning-peak-42064.herokuapp.com/admin/">
                  <i className="fas fa-user "></i> {login}
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active sahifa"
                aria-current="page"
              >
                {hoompage}
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
                <Link to="/Maqolalar" className="nav-link" aria-current="page">
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
                <Link to="/loyihalar" className="nav-link" aria-current="page">
                  Loyihalar
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Tadbirlar" className="nav-link" aria-current="page">
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
                <Option value="Uzbekcha" onClick={() => handleClick("uz")}>
                  Uzbekcha
                </Option>
                <Option value="Russin" onClick={() => handleClick("ru")}>
                  Russin
                </Option>
                <Option value="English" onClick={() => handleClick("en")}>
                  English
                </Option>
              </Select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
