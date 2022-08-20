import React from "react";
import Form from "./common/Form";
import { getMovies, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { renderFormData } from "./utils/renderFormData";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    movies: getMovies(),
    data: renderFormData(this.props.match.params.id, getMovies(), [
      "title",
      "genre",
      "numberInStock",
      "dailyRentalRate",
    ]) || {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    errors: {},
    genres: getGenres(),
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.required().label("Genre"),
    numberInStock: Joi.number().integer().min(0).max(100),
    dailyRentalRate: Joi.number().min(0).max(10),
  };

  doSubmit = () => {
    const { title, genre, numberInStock, dailyRentalRate } = this.state.data;
    const movie = { title, genre, numberInStock, dailyRentalRate };
    movie._id = this.props.match.params.id;
    saveMovie(movie);

    this.props.history.push("/movies");
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", this.state.genres, this.state.data.genre.name)}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
