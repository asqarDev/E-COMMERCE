import React, { Component } from "react";
import AsisentPages from "../pages/AsisentPages";
import ProfilPages from "../pages/ProfilPages";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./index.css";
export default class Maqolalar extends Component {
  state = {
    maqola: [],
  };
  getMaqola = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
    })
      .then((res) => {
        if (res && Array.isArray(res.data)) {
          this.setState({
            maqola: res.data,
          });
        }
        // console.log(res);
      })
      .catch((res) => {
        alert("Servirda xatolik bor");
        console.log(res);
      });
  };
  componentDidMount() {
    this.getMaqola();
  }
  render() {
    const { maqola } = this.state;
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
                <i className="fas fa-newspaper"></i> Maqola
              </p>
              <Table
                striped
                bordered
                hover
                size="xl"
                text="center"
                className="tables"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>TO‘LIQ NOMI</th>
                    <th>HAVOLA</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(maqola)
                    ? maqola.map((item) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.userId}</td>
                        </tr>
                      ))
                    : ""}
                </tbody>
              </Table>

              <div className="pages">
                <nav
                  aria-label="Page navigation example"
                  className="text-center mt-4"
                >
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
