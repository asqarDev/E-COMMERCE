import React, { Component } from "react";
import AsisentPages from "../pages/AsisentPages";
import ProfilPages from "../pages/ProfilPages";
import { Table } from "react-bootstrap";
import './index.css'
export default class Taqdimotlar extends Component {
  render() {
    const [posts,loading] = this.props
    return (
      <>
        <AsisentPages />
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-3">
              <ProfilPages />
            </div>
            <div className="col-lg-9">
              <p className="izoh"> <i className='fas fa-file-powerpoint'></i> Taqdimotlar ro‘yxati</p>
              <Table
                striped
                bordered
                hover
                size="xl"
                text="center"
                className="tables mt-4"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>TO‘LIQ NOMI</th>
                    <th>HAVOLA</th>
                  </tr>
                </thead>
                <tbody>
                 {this.posts}
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
