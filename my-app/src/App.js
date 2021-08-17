import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Section from "./Components/Section";
import Maqolalar from "./Components/HomPages/Maqolalar";
import Kitoblar from "./Components/HomPages/Kitoblar.js";
import Taqdimotlar from "./Components/HomPages/Taqdimotlar";
import Loyihalar from "./Components/HomPages/Loyihalar";
import Tadbirlar from "./Components/HomPages/Tadbirlar";
import Videolar from "./Components/HomPages/Videolar";
import React from "react";
import { connect } from "react-redux";
import {uzLanguege} from './Redux/Actions/uzLanguege';
import {ruLanguege} from './Redux/Actions/ruLanguege';
import {enLanguege} from './Redux/Actions/enLanguege';
import { GetValue } from "./Components/Server/localstorage";

class App extends React.Component {
  componentDidMount(){
    if (GetValue('project1','uz')) {
      console.log('uztrue');
      this.props.uzLanguege()
    }else if(GetValue('project1','en')){
      this.props.enLanguege()
      console.log('entrue');
    }else {
      console.log('rutrue');
      this.props.ruLanguege()
    }
    console.log(this.props.uzLang,this.props.enLang)
  }
  render(){
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Section />} />
            <Route path="/Maqolalar" render={() => <Maqolalar />} />
            <Route path="/Kitoblar" render={() => <Kitoblar />} />
            <Route path="/taqdimotlar" render={() => <Taqdimotlar/>} />
            <Route path="/loyihalar" render={() => <Loyihalar/>} />
            <Route path="/tadbirlar" render={() => <Tadbirlar/>} />
            <Route path="/videolar" render={() => <Videolar/>} />
          </Switch>
          <Footer />
        </Router>
        <div className="arrowTop">
          <a href="#">
            <div className="tops" id="2">
              <i className="fas fa-arrow-up"></i>
            </div>
          </a>
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

export default connect(mapStateToProps, {uzLanguege,  ruLanguege, enLanguege })(App);
