import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "antd/dist/antd.css";
import Section from "./Components/Section";
import Maqolalar from "./Components/HomPages/Maqolalar";
import Kitoblar from "./Components/HomPages/Kitoblar.js";
import Taqdimotlar from "./Components/HomPages/Taqdimotlar";
import Loyihalar from "./Components/HomPages/Loyihalar";
import Tadbirlar from "./Components/HomPages/Tadbirlar";
import Videolar from "./Components/HomPages/Videolar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Boshsahifa">
            <Section />
          </Route>
          <Route path="/Maqolalar">
            <Maqolalar />
          </Route>
          <Route path="/Kitoblar">
            <Kitoblar />
          </Route>
          <Route path="/taqdimotlar">
            <Taqdimotlar />
          </Route>
          <Route path="/loyihalar">
            <Loyihalar />
          </Route>
          <Route path="/tadbirlar">
            <Tadbirlar />
          </Route>
          <Route path="/videolar">
            <Videolar />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <div className="arrowTop">
        <a href='#'>
          <div className="tops" id="2">
            <i className="fas fa-arrow-up"></i>
          </div>
        </a>
      </div>
    </>
  );
}
export default App;
