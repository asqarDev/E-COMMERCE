import React, { Component } from "react";
import AsisentPages from "./pages/AsisentPages";
import ProfilPages from "./pages/ProfilPages";
import "./section.css";
import { saveTuitor } from "./Server/config/admin/tuitor";
export default class Section extends Component {
  state = {
    userdata: [],
    profiledata: [],
  };
  getSection = () => {
    saveTuitor()
      .then((res) => {
        this.setState({
          userdata: res.data,
          profiledata: res.data.user,
        });
      })
      .catch((res) => {
        alert("Servirda Xatolik bor");
      });
  };
  componentDidMount() {
    this.getSection();
  }
  render() {
    const { userdata, profiledata } = this.state;
    return (
      <>
        <AsisentPages />
        <div className="container py-5">
          <div className="row my-5 pt-3">
            <div className="col-lg-3">
              <ProfilPages />
            </div>
            <div className="col-lg-9">
              <div>
                <div className="card p-4 malumot">
                  {
                    <div>
                      <h3>
                        {profiledata.last_name} {profiledata.first_name}
                      </h3>
                      <p>
                        <b>Fakultet: </b>
                        {userdata.faculty}
                      </p>

                      <p>
                        <b>Kafedra: </b> {userdata.cafedra}
                      </p>
                      <p>
                        <b>Ilmiy daraja va unvon: </b> {userdata.level}
                      </p>
                      <p>
                        <b>E-pochta: </b> {profiledata.email}
                      </p>
                      <hr />
                      <h5 className="py-3">Qo‘shimcha ma'lumotlar</h5>
                    </div>
                  }
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
                          {profiledata.email}
                        </a>
                      </div>
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
