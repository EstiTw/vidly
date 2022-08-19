import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MovieForm from "./Components/MovieForm";
import Movies from "./Components/Movies";
import Customers from "./Components/Customers";
import Rentals from "./Components/Rentals";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/NavBar";
import LoginForm from "./Components/LoginForm";
import RegisterForm from "./Components/RegisterForm";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
