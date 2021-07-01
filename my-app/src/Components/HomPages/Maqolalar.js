import React, { Component } from "react";
import AsisentPages from "../pages/AsisentPages";
import ProfilPages from "../pages/ProfilPages";
import { Table } from "react-bootstrap";
import "./index.css";
export default class Maqolalar extends Component {
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
              <p className="izoh"> <i className='fas fa-newspaper'></i> Maqola</p>
              <Table striped bordered hover size="xl" text="center" className='tables'>
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
                      APPLICATION OF THE ELECTROMAGNETIC VIBRATION DRIVE IN
                      INTENSIVE VIBROTECHNOLOGIES OF AGRICULTURAL AND WATER
                      SECTORS, 2021 <br />
                      <span className="badge bg-primary p-2">WoS</span>
                    </td>
                    <td>Ochish</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Шамол электр қурилмаларининг парраклари ва баландлиги
                      ўлчамларининг энергия самарадорлигига кўрсатадиган
                      таъсири, 2021
                    </td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      Physical and electronic model of studying infrared
                      radiator for drying wending insulation, 2021 Scopus
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>

              <div className='pages'>
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
