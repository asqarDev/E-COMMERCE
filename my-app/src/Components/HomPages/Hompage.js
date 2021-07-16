import React from "react";
import { Table,Spinner } from "react-bootstrap";

const Hompage = ({ posts, loading }) => {
  if (loading) {
    return  <div className='container d-flex py-5 justify-content-center'><Spinner animation="grow" variant="info" /></div>
  }
  return (
    <div className="container">
      <div className="row">
        <Table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>kdlka</th>
              <th>aksla</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr >
                <td key={post.id}>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.userId}</td>
              </tr>
              
            ))}
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Hompage;
