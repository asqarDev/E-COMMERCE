import React, { Component } from "react";
import ProfilPages from "../pages/ProfilPages";
import AsisentPages from "../pages/AsisentPages";
import { Table } from "react-bootstrap";
import "./index.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { host } from "../Server/host";
export default class Kitoblar extends Component {
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
    axios.get(`${host}/books/`).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((item) => {
        return item.file != null ? (
          <React.Fragment>
            <tr className="tables">
              <td>{item.count}</td>
              <td>
                <a download href={item.file}>
                  {item.name}
                </a>
              </td>
              <td>
                <a> </a>
              </td>
            </tr>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <tr className="tables">
              <td>{item.count}</td>
              <td>
                <a>{item.name}</a>
              </td>
              <td>
                <a href={item.link} className='links'>Ochish</a>
              </td>
            </tr>
          </React.Fragment>
        );
        });
      this.setState({
        pageCount: Math.ceil(data.length / this.state.perPage),
        postData,
      })
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
            <div className="col-lg-9">
              <p className="izoh">
                {" "}
                <i className="fas fa-book"></i> Kitoblar ro'yxati
              </p>
              <Table
                striped
                bordered
                hover
                size="lg"
                text="center"
                className="tables"
              >
                <thead>
                  <tr>
                    <th className="">№</th>
                    <th>TO‘LIQ NOMI</th>
                    <th>HAVOLA</th>
                  </tr>
                </thead>
                <tbody>{this.state.postData}</tbody>
              </Table>
              <div className="d-flex w-100% paginates">
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
