import axios from "axios";
import React from "react";
import { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import {uzLanguege} from './Redux/Actions/uzLanguege';
import {enLanguege} from './Redux/Actions/enLanguege'
import {ruLanguege} from './Redux/Actions/ruLanguege'



class Contents extends Component {
  render() {
    const { uzLange } = this.props;
    const changeSelect = (value) => {
      if (value == "uz") {
        this.props.uzLanguege();
      } else if (value == "en") {
        this.props.enLanguege();
      }else if(value="ru"){
        this.props.ruLanguege();
      }
    };
    return (
      <div className="container">
        <button onClick={this.props.uzLanguege}>uz</button>
        <button onClick={this.props.ruLanguege}>ru</button>
        <button onClick={this.props.enLanguege}>en</button>
        <div className="card-body">
          hello one
          <h3>{uzLange?"salom":"hello"}</h3>
          <p></p>
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

export default connect(mapStateToProps, { enLanguege, uzLanguege,ruLanguege })(Contents);



