import axios from "axios";
import React, { Component } from "react";
import Typed from "react-typed";
import { host } from "../Server/host";

import "./Asisent.css";
export default class AsisentPages extends Component {
  state={
    malumot:[],
  }
  getMalumot(){
    axios({
      url:`${host}/me/`,
      method:"GET",
    }).then(res=>{
      console.log(res.data)
    }).catch(res=>{
      console.log(res.data);
    })
  }
  componentDidMount(){
    this.getMalumot()
  }
  render() {
    return (
      <div className="section-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="asisent my-3">Assistent</p>
              <Typed
                className="typed-text text-center"
                strings={["MUSTAFOQULOV ALIMARDON MAMATOVICH"]}
                typeSpeed={100}
                backSpeed={100}
              />{" "}
              <p className=" my-2">
                <a>
                  Bosh sahifa <i className="fas fa-chevron-right mx-2"></i>
                </a>{" "}
                <p className="d-inline-block myname">
                  Mustafoqulov Alimardon Mamatovich
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
