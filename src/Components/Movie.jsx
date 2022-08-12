import React from "react";
import { Component } from "react";
import Like from "./common/Like";

class Movie extends Component {
  render() {
    const { movie, onDelete, onLike } = this.props;

    return (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Like liked={movie.liked} onClick={() => onLike(movie)} />
        </td>
        <td>
          <button onClick={() => onDelete(movie)} className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movie;
