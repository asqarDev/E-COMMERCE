import axios from "axios";
import React, { Component } from "react";
import AsisentPages from "./pages/AsisentPages";
import ProfilPages from "./pages/ProfilPages";
import "./section.css";
import { host } from "./Server/host";
export default class Section extends Component {
  getSection = () => {
    axios({
      url: `${host}/me/`,
      method: "GET",
    })
      .then((res) => {
        <div>
          <div className="card p-3 malumot">
                <h3>{res.data.user.first_name}</h3>
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
                    <p className="p-2">
                      <i className="fas fa-user"></i> Foydalanuvchi hisoblari
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="card">
                    <p className="p-2">
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
                    <div className="mx-3">
                      <a
                        href="mailto:a.mustafaqulov@tiiame.uz"
                        className="gmail"
                      >
                        a.mustafaqulov@tiiame.uz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        console.log(res.data)
      })
      .catch((res) => {
        console.log(res)
      });
  };

  componentDidMount() {
    this.getSection();
  }
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
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
