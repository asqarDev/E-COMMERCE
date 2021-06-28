import React, { Component } from "react";
import "./Asisent.css";
export default class ProfilPages extends Component {
  render() {
    return (
      <>
        <div class="card mycard">
          <div className="card-header">
            <img
              src="/img/profilimg.jpeg"
              class="card-img-top w-100"
              alt="profile img"
            />
          </div>
          <div class="card-body">
            <button class="btn mybtn w-100">
              <i className="fas fa-address-card mx-2"></i>Profile
            </button>
          </div>
        </div>
      </>
    );
  }
}
