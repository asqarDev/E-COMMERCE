import React from "react";
export const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="container text-center">
      <nav>
        <ul className="pagination ">
          {pageNumber.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                className="page-link"
                href="!#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
