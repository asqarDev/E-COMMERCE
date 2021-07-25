import React, { Component } from "react";
import AsisentPages from "../pages/AsisentPages";
import ProfilPages from "../pages/ProfilPages";
import "./index.css";
import { host } from "../Server/host";
import axios from "axios";
export default class Videolar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios.get(`${host}/videos/`).then((res) => {
      const data = res.data.results;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );

      const postData = slice.map((item) => (
        <div className="mt-5">
        <iframe
          width="100%"
          height="450"
          src={item.link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <video controls width="100%">
          <source src={`${host}` + item.file}></source>
        </video>
      </div>
      ));
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        postData,
      });



      
    });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }
  render() {
    return (
      <>
        <AsisentPages />
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-3">
              <ProfilPages />
            </div>
            <div className="col-lg-9 overflow-hidden">
              <p className="izoh">
                {" "}
                <i className="fas fa-file-video"></i> Videolar ro‘yxati
              </p>

              <div>{this.state.postData}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
