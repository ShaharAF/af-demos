import React from "react";
import "./DemoCard.css";
import { Dimmer, Card } from "semantic-ui-react";

class DemoCard extends React.Component {
  onMouseOver() {
    this.handleShow();
  }

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  state = { active: false };

  render() {
    const { active } = this.state;
    return (
      <div className="ui card">
        <Dimmer.Dimmable
          as={Card}
          blurring
          dimmed={active}
          onMouseOver={this.handleShow}
          onMouseLeave={this.handleHide}
        >
          <Dimmer active={active}>
            <div className="content">
              <div className="center">
                <div className="ui inverted button">Go To Repository</div>
              </div>
            </div>
          </Dimmer>
          <div className="image landscape" style={{ minHeight: 288 }}>
            <img
              src={require(`../assets/${this.props.demo.platform}_logo.png`)}
              alt="card"
            />
          </div>
        </Dimmer.Dimmable>
        <div className="content">
          <div className="center aligned header">
            {this.props.demo.platform}
          </div>
        </div>
        <div className="extra content">
          <a href="http://www.github.com">
            <i className="star icon" />
            18 Stars
          </a>
        </div>
      </div>
    );
  }
}

export default DemoCard;
