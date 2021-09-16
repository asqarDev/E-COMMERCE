import React, { Component } from "react";
import AsisentPages from "./pages/AsisentPages";
import ProfilPages from "./pages/ProfilPages";
import "./section.css";
import { saveTuitor } from "./Server/config/admin/tuitor";
import { uzLanguege } from "../Redux/Actions/uzLanguege";
import { ruLanguege } from "../Redux/Actions/ruLanguege";
import { enLanguege } from "../Redux/Actions/enLanguege";
import { connect } from "react-redux";
class Section extends Component {
  state = {
    userdata: [],
    profiledata: [],
  };
  getSection = (uz,en) => {
    saveTuitor(uz,en)
    .then((res) => {
      
      this.setState({
        userdata: res.data,
        profiledata: res.data.user,
      });
    })
    .catch((res) => {
      
    });
    
  };
  componentDidMount() {
    this.getSection(this.props.uzLang,this.props.enLang);
  }
  render() {
    const { userdata, profiledata } = this.state;
    const {uzLang, enLang} = this.props
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
                        <b>{uzLang?"Fakultet:":enLang?"Faculty:":"Факультет:"} </b>
                        {userdata.faculty} 
                      </p>
                      <p>
                        <b>{uzLang?"Kafedra:":enLang?"Department:":"Кафедра:"} </b> {userdata.cafedra}
                      </p>
                      <p>
                        <b>{uzLang?"Ilmiy daraja va unvon:":enLang?"Degree:":"Научная степень и звание :"} </b> {userdata.level}
                      </p>
                      <p>
                        <b>{uzLang?"E-pochta:":enLang?"Email:":"Э-почта:"} </b> {profiledata.email}
                      </p>
                      <hr />
                      <h5 className="py-3">{uzLang?"Qo‘shimcha ma'lumotlar":enLang?"Additional information":"Дополнительная информация"}</h5>
                    </div>
                  }
                </div>

                <div className="row row-2 my-5">
                  <div className="col-lg-6 col-md-6">
                    <div className="card ">
                      <p className="p-2">
                        <i className="fas fa-user"></i> {uzLang?"Foydalanuvchi hisoblari":enLang?"User Accounts":" Аккаунты пользователя"}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card">
                      <p className="p-2">
                        <i className="fas fa-signal"></i>{" "}
                        <a
                          className="index" target='_blank'
                          href="https://www.scopus.com/results/authorNamesList.uri?sort=count-f&src=al&sid=2435879e53408658af9711af9850fb43&sot=al&sdt=al&sl=42&s=AUTHLASTNAME%28Shoyusupov%29+AND+AUTHFIRST%28Sh%29&st1=Shoyusupov&st2=Sh&orcidId=&selectionPageSearch=anl&reselectAuthor=false&activeFlag=true&showDocument=false&resultsPerPage=20&offset=1&jtp=false&currentPage=1&previousSelectionCount=0&tooManySelections=false&previousResultCount=0&authSubject=LFSC&authSubject=HLSC&authSubject=PHSC&authSubject=SOSC&exactAuthorSearch=false&showFullList=false&authorPreferredName=&origin=searchauthorfreelookup&affiliationId=&txGid=fe6538ae388d86b2fec354cc157a60b2"
                        >
                          {uzLang?"h-Indeksi":enLang?"Citations":"h-показатель"}
                        </a>
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
                          href={"mailto:"+`${profiledata.email}`}
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
const mapStateToProps = (state) => {
  return {
    uzLang: state.changeLang.uzLang,
    enLang: state.changeLang.enLang,
  };
};

export default connect(mapStateToProps, {uzLanguege,  ruLanguege, enLanguege })(Section);