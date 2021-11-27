import React, { Component } from "react";
import { host1 } from "../Server/host";
import "./Asisent.css";
import { saveTuitor } from "../Server/config/admin/tuitor";
import { connect } from "react-redux";
import {uzLanguege} from '../../Redux/Actions/uzLanguege';
import {ruLanguege} from '../../Redux/Actions/ruLanguege';
import {enLanguege} from '../../Redux/Actions/enLanguege';
 class ProfilPages extends Component {
  state = {
    userdata: [],
  };
  getMalumot() {
    saveTuitor().then((res) => {
      console.log(res.data.avatar)
      this.setState({
        userdata: res.data,
        });
      })
      .catch((res) => {
        
      });
  }
  componentDidMount() {
    this.getMalumot();
  }
  render() {
    const { userdata } = this.state;
    const {uzLang, enLang} = this.props;
    return (
      <>
        <div className="card mycard mb-4">
        <div className="card-header">
           
           <img
             src={`${host1}`+userdata.avatar}
             className="card-img-top w-100"
             alt="Profile images"
           />
         </div>
          <div className="card-body">
            <button className="btn mybtn w-100">
              <i className="fas fa-address-card mx-2"></i>{uzLang?"Profil":enLang?"Profile":"Профил"}
            </button>
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
export default connect(mapStateToProps, {uzLanguege,  ruLanguege, enLanguege })(ProfilPages);
