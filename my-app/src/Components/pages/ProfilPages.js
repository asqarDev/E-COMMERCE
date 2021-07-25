import React, { Component } from "react";
import { host } from "../Server/host";
import "./Asisent.css";
import axios from "axios";
export default class ProfilPages extends Component {
  state = {
    userdata: [],
  };
  getMalumot() {
    axios({
      url: `${host}/me/`,
      method: "GET",
    })
      .then((res) => {
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
