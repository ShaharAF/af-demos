import React from "react";
import DemoCard from "./DemoCard";

class Demos extends React.Component {
  render() {
    const DemoList = this.props.demos.map((demo, index) => {
      return <DemoCard key={index} demo={demo} />;
    });
    return <div className="ui four special cards">{DemoList}</div>;
  }
}

export default Demos;
