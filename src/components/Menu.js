import React, { Component } from "react";

class Menu extends Component {
  state = {
    activeMenu: ["active", "", ""]
  };

  onClick(event, screen) {
    this.props.onClick(screen);
    this.updateMenu(event);
  }

  updateMenu = e => {
    this.setState({
      activeMenu:
        e.target.id === "Home" ? ["active", "", ""] : ["", "active", ""]
    });
    // this.setState({
    //   activeMenu: ["active", "", ""]
    // });
  };

  render() {
    return (
      <div className="ui two item menu">
        <button
          style={{
            outline: 0
          }}
          className={`item ${this.state.activeMenu[0]}`}
          id="Home"
          onClick={e => this.onClick(e, "Home")}
        >
          Home
        </button>
        <button
          style={{
            outline: 0
          }}
          className={`item ${this.state.activeMenu[1]}`}
          id="Demos"
          onClick={e => this.onClick(e, "Demos")}
        >
          Demos
        </button>
      </div>
    );
  }
}

export default Menu;
