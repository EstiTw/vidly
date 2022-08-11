import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies, onDelete, onLike } = this.props;
    const { length: count } = movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
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
            {movies.map((movie) => (
              <Movie
                key={movie._id}
                movie={movie}
                onDelete={onDelete}
                onLike={onLike}
              />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
