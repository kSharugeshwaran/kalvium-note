import React, { Component } from 'react';
import "./Editor.css"

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleChange = (text) => {
    this.setState({
      inputText: text.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            value={this.state.inputText}
            onChange={this.handleChange}
          />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{this.state.inputText}</div>
        </div>
      </div>
    );
  }
}
