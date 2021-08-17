import React, { Component } from "react";
import "./Navbar.css";
import "../../assets/FA/css/all.min.css";
import { Link } from "react-router-dom";
import { uzLanguege } from "../../Redux/Actions/uzLanguege";
import { enLanguege } from "../../Redux/Actions/enLanguege";
import { ruLanguege } from "../../Redux/Actions/ruLanguege";
import { connect } from "react-redux";

class  Navbar extends Component{
   handleChange = (value) => {
  
    if (value.target.value === "UZ") {
      this.props.uzLanguege();
      window.location.reload()
    } else if (value.target.value === "RU") {
      this.props.ruLanguege();
      window.location.reload()
    }else if(value.target.value === "EN"){
      this.props.enLanguege();
      window.location.reload()
    }
  };
  render(){
  const {uzLang,enLang} = this.props;
  return (
    
    <>
      <header>

        <div className="container">

          <div className="row py-2 justify-content-between">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <a href="http://staff.tiiame.uz/" className="linkLogo">
                <div className="d-flex justify-content-between w-100 align-items-center">
                  <div className="logo">
                    <img height="70px" src="/img/logo.png" alt="logo" />
                  </div>
                  <div className="logoh6">
                    <h6>{uzLang?"TOSHKENT IRRIGATSIYA VA QISHLOQ XO'JALIGINI MEXANIZATSIYALASH MUHANDISLARI INSTITUTI":enLang?"TASHKENT INSTITUTE OF IRRIGATION AND AGRICULTURAL MECHANIZATION ENGINEERS":"ТАШКЕНТСКИЙ ИНСТИТУТ ИНЖЕНЕРОВ ИРРИГАЦИИ И МЕХАНИЗАЦИИ СЕЛЬСКОГО ХОЗЯЙСТВА"}</h6>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end align-items-center">
              <div>
                <a href="https://morning-peak-42064.herokuapp.com/admin/">
                  <i className="fas fa-user "></i> {uzLang?"Kirish":enLang?"Login":"Войти"}
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
                {uzLang?"Bosh sahifa":enLang?"Home":"Главная"}
              </Link>
            </li>
          </ul>
         <div className='d-flex'>
         <div className="navbar-toggler mx-2">
              <select value={uzLang?"UZ":enLang?"EN":"RU"} className="form-select form-select-sm"
               aria-label=".form-select-sm example" 
              onChange={this.handleChange}>
                    <option value="UZ" name='UZ'>Uzbekcha</option>
                    <option value="EN" name='EN'>English</option>
                    <option value="RU" name='RU'>Russin</option>
              </select>
            </div>
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
         </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Maqolalar" className="nav-link" aria-current="page">
                  {uzLang?"Maqolalar":enLang?"Articles":"Статьи"}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Kitoblar" className="nav-link" aria-current="page">
                  {uzLang?"Kitoblar":enLang?"Books":"Книги"}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/taqdimotlar"
                  className="nav-link"
                  aria-current="page"
                >
                  {uzLang?"Taqdimotlar":enLang?"Presentations":"Презентации"}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/loyihalar" className="nav-link" aria-current="page">
                  {uzLang?"Loyihalar":enLang?"Projects":"Проекты"}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Tadbirlar" className="nav-link" aria-current="page">
                  {uzLang?"Tadbirlar":enLang?"Events":"Мероприятия"}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/videolar" className="nav-link" aria-current="page">
                  {uzLang?"Videolar":enLang?"Videos":"Видеоуроки"}
                </Link>
              </li>
              <li className="nav-item">
                <a href="#footer" className="nav-link" aria-current="page">
                  {uzLang?"Bog\'lanish":enLang?"Contact":"контакты"}
                </a>
              </li>
            </ul>
            <div className="mySelect">
              <select value={uzLang?"UZ":enLang?"EN":"RU"} className="form-select form-select-sm"
               aria-label=".form-select-sm example" 
              onChange={this.handleChange}>
                    <option value="UZ" name='UZ'>Uzbekcha</option>
                    <option value="EN" name='EN'>English</option>
                    <option value="RU" name='RU'>Russin</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
}
const mapStateToProps = (state) => {
  return {
    uzLang: state.changeLang.uzLang,
    enLang: state.changeLang.enLang,
  };
};

export default connect(mapStateToProps, {uzLanguege,  ruLanguege, enLanguege })(Navbar);


 
