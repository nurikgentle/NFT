import React from "react";

const Pagination = ({ nftsPerPage, totalNfts, paginate }) => {
    
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalNfts / nftsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <h1
              href="!#"
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
