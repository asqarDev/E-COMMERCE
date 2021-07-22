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
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        ""
      );
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Section />} />
          <Route path="/Maqolalar" render={() => <Maqolalar />} />
          <Route path="/Kitoblar" render={() => <Kitoblar />} />
          <Route
            path="/taqdimotlar"
            render={() => (
              <Taqdimotlar
                posts={currentPost}
                loading={loading}
                paginate={paginate}
                postsPerPage={postsPerPage}
              />
            )}
          />
          <Route path="/loyihalar" render={() => <Loyihalar />} />
          <Route path="/tadbirlar" render={() => <Tadbirlar />} />
          <Route path="/videolar" render={() => <Videolar />} />
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
