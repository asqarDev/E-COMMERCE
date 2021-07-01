import React, { Component } from "react";
import AsisentPages from "../pages/AsisentPages";
import ProfilPages from "../pages/ProfilPages";
import { Table } from "react-bootstrap";
import "./index.css";
export default class Videolar extends Component {
  render() {
    return (
      <>
        <AsisentPages />
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-3">
              <ProfilPages />
            </div>
            <div className="col-lg-9">
              <p className="izoh"> <i className='fas fa-file-video'></i> Videolar ro‘yxati</p>
              <div>
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/b_WuqCDv6mw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className='mt-5'>
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/NgUl00S3QS0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
