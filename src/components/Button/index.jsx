import "./styles.css";

import { Component } from "react";

export class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}
