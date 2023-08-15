import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: null,
    };
  }

  componentDidMount() {
    // Fetch content json from public/content.json
    fetch("./content.json")
      .then((res) => res.json())
      .then(
        (json) => {
          this.setState({
            isLoaded: true,
            content: json,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    return (
      <div id="App" className="w-screen min-h-screen">
        {this.state.content !== null && this.state.isLoaded ? (
          <Routes>
            <Route path="/" element={<Home content={this.state.content} />} />
            <Route
              path="/docs"
              element={<Documentation content={this.state.content} />}
            />
          </Routes>
        ) : (
          <div>
            <p>Sorry, there's an issue loading content for this page :(</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
