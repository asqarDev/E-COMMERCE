import React, { Component } from "react";
import AsisentPages from "../pages/AsisentPages";
import ProfilPages from "../pages/ProfilPages";
import { Table } from "react-bootstrap";
import "./index.css";
export default class Tadbirlar extends Component {
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
              <p className="izoh"> <i className='fas fa-calendar-alt'></i> Tadbirlar ro‘yxati</p>
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
                  <tr>
                    <td>1</td>
                    <td>
                      Mexatronika asoslari, 2021 <br />
                    </td>
                    <td>
                      <a href="#">Ochish</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Mexatronika asoslari, 2021</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mexatronika asoslari, 2021</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      Yurt qismatini o‘z qismati deb bilgan adib, , 09-04-2021 -
                      09-04-2021
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      TIQXMMI talabalarining toshkent qishloq xo‘jaligi
                      texnikasi zavodiga tashrifi, , 15-03-2021 - 15-03-2021
                    </td>
                    <td><a href='#'>Ochish</a></td>
                  </tr>
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
