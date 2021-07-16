import axios from "axios";
import React from "react";
import { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import { uzLanguge } from "./Redux/Actions/uzLanguge";
import { engLaguege } from "./Redux/Actions/engLaguege";

class Content extends Component {
  render() {
    const { uzLang } = this.props;
    const changeSelect = (value) => {
      if (value == "uz") {
        this.props.uzLanguge();
      } else if (value == "en") {
        this.props.engLaguege();
      }
    };
    return (
      <div className="container">
        <button onClick={this.props.uzLanguge}>uz</button>
        <button onClick={this.props.engLaguege}>en</button>
        <div className="card-body">
          <h3>{uzLang ? "Salom" : "Hello"}</h3>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    uzLang: state.changeLang.uzLang,
  };
};

export default connect(mapStateToProps, { engLaguege, uzLanguge })(Content);



