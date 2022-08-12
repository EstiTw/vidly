import React from "react";
import Movie from "./Movie";

const MoviesTable = props => {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table">
      <thead>
        <tr key={0}>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <Movie key={movie._id} movie={movie} onDelete={onDelete} onLike={onLike} />
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
