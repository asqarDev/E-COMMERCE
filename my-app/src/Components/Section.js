import React, { Component } from "react";
import AsisentPages from "./pages/AsisentPages";
import ProfilPages from "./pages/ProfilPages";
import "./section.css";
export default class Section extends Component {
  render() {
    return (
      <>
        <AsisentPages />
        <div className="container py-5">
          <div className="row my-5 pt-3">
            <div className="col-lg-3">
              <ProfilPages />
            </div>
            <div className="col-lg-9">
              <div className="card p-3 malumot">
                <h3>Mustafoqulov Alimardon Mamatovich</h3>
                <p>
                  <b>Fakultet: </b> Qishloq va suv xo‘jaligi energiya ta’minoti
                </p>
                <p>
                  <b>Kafedra: </b> Elektrotexnika va mexatronika
                </p>
                <p>
                  <b>Ilmiy daraja va unvon: </b> Assistent
                </p>
                <p>
                  <b>E-pochta: </b> a.mustafaqulov@tiiame.uz
                </p>
                <hr />
                <h5>Qo‘shimcha ma'lumotlar</h5>
              </div>
              <div className="row row-2 my-5">
                <div className="col-lg-6 col-md-6">
                  <div className="card ">
                    <p>
                      <i className="fas fa-user"></i> Foydalanuvchi hisoblari
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card">
                    <p>
                      <i className="fas fa-signal"></i> Iqtiboslash indekslari
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="xabarlar">
                    <div>
                      <div className="div">
                        <i className="fas fa-envelope"></i>
                      </div>
                    </div>
                    <div className='mx-3'>
                      <a href="#" className="gmail">
                        a.mustafaqulov@tiiame.uz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
