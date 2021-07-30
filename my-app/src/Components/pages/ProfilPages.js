import React, { Component } from "react";
import { host } from "../Server/host";
import "./Asisent.css";
import { saveTuitor } from "../Server/config/admin/tuitor";
export default class ProfilPages extends Component {
  state = {
    userdata: [],
  };
  getMalumot() {
    saveTuitor().then((res) => {
        this.setState({
          userdata: res.data,
        });
      })
      .catch((res) => {
        alert("internet bilan muamo bor")
      });
  }
  componentDidMount() {
    this.getMalumot();
  }
  render() {
    const { userdata } = this.state;
    return (
      <>
        <div className="card mycard mb-4">
          <div className="card-header">
           
            <img
              src={`${host}`+userdata.avatar}
              className="card-img-top w-100"
              alt="Profile images"
            />
          </div>
          <div className="card-body">
            <button className="btn mybtn w-100">
              <i className="fas fa-address-card mx-2"></i>Profile
            </button>
          </div>
        </div>
      </>
    );
  }
}
