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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { host } from "./Components/Server/host";
import { useTranslation } from "react-i18next";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`${host}`);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  const { t, i18n } = useTranslation();
  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Router>
        <Navbar handleClick={handleClick()}/>
        <Switch>
          <Route exact path="/" render={() => <Section />} />
          <Route path="/Maqolalar" render={() => <Maqolalar loading={loading} />} />
          <Route path="/Kitoblar" render={() => <Kitoblar loading={loading} />} />
          <Route path="/taqdimotlar" render={() => <Taqdimotlar loading={loading}/>} />
          <Route path="/loyihalar" render={() => <Loyihalar loading={loading}/>} />
          <Route path="/tadbirlar" render={() => <Tadbirlar loading={loading}/>} />
          <Route path="/videolar" render={() => <Videolar loading={loading}/>} />
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
export default App;
