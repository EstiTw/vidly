import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/Like";
import Table from "./common/Table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Genres" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
    },
    {
      key: "Delete",
      content: movie => (
        <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return <Table data={movies} columns={this.columns} sortColumn={sortColumn} onSort={onSort} />;
  }
}

export default MoviesTable;
