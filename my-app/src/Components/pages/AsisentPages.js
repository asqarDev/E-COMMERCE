import React, { Component } from "react";
import Typed from "react-typed";
import { saveTuitor } from "../Server/config/admin/tuitor";
import "./Asisent.css";
export default class AsisentPages extends Component {
  hompage = "Bosh sahifa";
  name=['Mustafoqulov Alimardon Mamatovich']
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
        alert("kechirasiz xatolik uchun");
      });
  }
  componentDidMount() {
    this.getMalumot();
  }
  render() {
    const { userdata, profiledata } = this.state;
    return (
      <div className="section-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="asisent my-3">{userdata.level}</p>
              <Typed
                className="typed-text text-center"
                strings={this.name}
                typeSpeed={100}
                backSpeed={100}
              />{" "}
              <p className=" my-2">
                <a>
                  {this.hompage} <i className="fas fa-chevron-right mx-2"></i>
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
