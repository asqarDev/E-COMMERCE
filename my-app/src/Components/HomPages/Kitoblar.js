import React, { Component } from "react";
import ProfilPages from "../pages/ProfilPages";
import AsisentPages from "../pages/AsisentPages";
import { Table } from "react-bootstrap";
import "./index.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
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
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((item) => (
        <React.Fragment>
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        </React.Fragment>
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
                    <th className="">Muqovasi</th>
                    <th>TO‘LIQ NOMI</th>
                    <th>HAVOLA</th>
                  </tr>
                </thead>
                <tbody>{this.state.postData}</tbody>
              </Table>
              <div className="d-flex">
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
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
