import React from "react";
import "./App.css";

const img = require("./96.png");

class App extends React.Component {
  componentDidCatch(e: Error) {
    console.log(e);
    return Promise.resolve(e);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>App Two</h1>
          <img src={img} />
        </header>
      </div>
    );
  }
}

export default App;
