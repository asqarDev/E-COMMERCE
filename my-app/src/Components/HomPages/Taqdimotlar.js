import React, { Component } from "react";
import AsisentPages from "../pages/AsisentPages";
import ProfilPages from "../pages/ProfilPages";
import { Table, Spinner } from "react-bootstrap";
import "./index.css";
import { Paginations } from "../Paginations/Paginations";
const Taqdimotlar = ({
  posts,
  loading,
  postsPerPage,
  paginate,
  totalPosts,
}) => {
  if (loading) {
    return (
      <div className="container d-flex py-5 justify-content-center  animators">
        <Spinner animation="grow" variant="info" />
      </div>
    );
  }
  return (
    <>
      <AsisentPages />
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3">
            <ProfilPages />
          </div>
          <div className="col-lg-9">
            <p className="izoh">
              {" "}
              <i className="fas fa-file-powerpoint"></i> Taqdimotlar ro‘yxati
            </p>
            <Table
              striped
              bordered
              hover
              size="xl"
              text="center"
              className="tables mt-4"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>TO‘LIQ NOMI</th>
                  <th>HAVOLA</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr>
                    <td key={post.id}>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.userId}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Paginations
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Taqdimotlar;
