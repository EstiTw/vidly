import React from "react";
import { Component } from "react";
import Movies from "./Components/Movies";
import { getMovies } from "./services/fakeMovieService";
import Pagination from "./Components/common/Pagination";

class App extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    moviesPerPage: 2,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePaginate = (pageNumber) => this.setState({ currentPage: pageNumber });

  render() {
    // Get current movies
    const indexOfLastMovie = this.state.currentPage * this.state.moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - this.state.moviesPerPage;
    const currentMovies = this.state.movies.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );

    return (
      <main className="container">
        <Movies
          movies={currentMovies}
          onDelete={this.handleDelete}
          onLike={this.handleLike}
        />
        <Pagination
          itemsPerPage={this.state.moviesPerPage}
          totalItems={this.state.movies.length}
          currentPage={this.state.currentPage}
          onPaginate={this.handlePaginate}
        />
      </main>
    );
  }
}

export default App;
