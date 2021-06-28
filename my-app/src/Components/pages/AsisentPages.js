import React, { Component } from "react";
import Typed from "react-typed";

import "./Asisent.css";
export default class AsisentPages extends Component {
  render() {
    return (
      <div className='section-1'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className='asisent my-3'>Assistent</p>
              <Typed
                className="typed-text text-center"
                strings={["MUSTAFOQULOV ALIMARDON MAMATOVICH"]}
                typeSpeed={100}
                backSpeed={100}
              />{" "}
             
              <p className=' my-2'><a>Bosh sahifa <i className='fas fa-chevron-right mx-2'></i></a> <p className='d-inline-block mx-3 myname'>Mustafoqulov Alimardon Mamatovich</p></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
