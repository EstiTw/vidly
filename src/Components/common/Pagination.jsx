import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ pageSize, itemsCount, currentPage, onPageChange }) => {
  //Generate page numbers:
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
            <a
              onClick={() => onPageChange(page)}
              style={{ cursor: "pointer" }}
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
