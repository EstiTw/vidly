import React from "react";
import { Component } from "react";
import Movies from "./Components/Movies";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
