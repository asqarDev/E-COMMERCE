import React, { Component } from "react";
import { connect } from "react-redux";
import Typed from "react-typed";
import { saveTuitor } from "../Server/config/admin/tuitor";
import "./Asisent.css";
import {uzLanguege} from '../../Redux/Actions/uzLanguege';
import {enLanguege} from '../../Redux/Actions/enLanguege';
import {ruLanguege} from '../../Redux/Actions/ruLanguege';
class AsisentPages extends Component {
  name=['Mustafoqulov Alimardon Mamatovich']
  nameen=['Мустафакулов Алимардон Маматович']
  state = {
    userdata: [],
    profiledata: [],
    name: [],
  }
  getMalumot() {
    saveTuitor().then((res) => {
        this.setState({
          userdata: res.data,
          profiledata: res.data.user,
        });
      })
      .catch((res) => {
        
      });
  }
  componentDidMount() {
    this.getMalumot();
  }
  render() {
    const { userdata, profiledata } = this.state;
    const {uzLang,enLang} = this.props;
    return (
      <div className="section-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="asisent my-3">{userdata.level}</p>
              <Typed
                className="typed-text text-center"
                strings={uzLang?this.name:enLang?this.name:this.nameen}
                typeSpeed={100}
                backSpeed={100}
              />{" "}
              <p className=" my-2">
                <a>
                  {uzLang?"Bosh sahifa":enLang?"Home":"Главная"} <i className="fas fa-chevron-right mx-2"></i>
                </a>{" "}
                <p className="d-inline-block myname">
                  {profiledata.last_name + " " + profiledata.first_name}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    uzLang: state.changeLang.uzLang,
    enLang: state.changeLang.enLang,
  };
};

export default connect(mapStateToProps, {uzLanguege,  ruLanguege, enLanguege })(AsisentPages);