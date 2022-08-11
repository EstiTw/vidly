import React, { Component } from "react";

//Input

class Pagination extends Component {
  state = {};
  render() {
    const { itemsPerPage, totalItems, currentPage, onPaginate } = this.props;
    //Generate page numbers:
    const pageNumbers = [];
    const pagesAmount = Math.ceil(totalItems / itemsPerPage);
    for (let i = 1; i <= pagesAmount; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                number === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => onPaginate(number)}
                style={{ cursor: "pointer" }}
                className="page-link"
                href="#"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
