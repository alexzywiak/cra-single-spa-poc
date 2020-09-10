import React from "react";
import "./App.css";
import Logo from "./logo.svg";

class App extends React.Component {
  componentDidCatch(e: Error) {
    console.log(e);
    return Promise.resolve(e);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Doesn't know where to get assets */}
          <h1>App One</h1>
          <img src={Logo} />
        </header>
      </div>
    );
  }
}

export default App;
