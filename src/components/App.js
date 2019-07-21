import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./Home";
import Demos from "./Demos";
import Data from "../data/data";

class App extends Component {
  constructor() {
    super();
    this.data = new Data();
  }
  state = {
    currentScreen: "Home"
  };

  setContent = content => {
    this.setState({
      currentScreen: content
    });
  };

  getContent() {
    if (this.state.currentScreen === "Home") {
      return <Home />;
    } else if (this.state.currentScreen === "Demos") {
      return <Demos demos={this.data.getDemos()} />;
    }
  }

  render() {
    return (
      <div className="ui container" id="container">
        <h1 className="ui center aligned header">AF Demos</h1>
        <div className="ui segments">
          <div className="ui segment">
            <Menu onClick={this.setContent} />
          </div>
          <div className="ui segment">{this.getContent()}</div>
        </div>
      </div>
    );
  }
}

export default App;
