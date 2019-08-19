import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Shape from './Shape';
import ColorSelector from './ColorSelector';

export default class NameTag extends Component {
  state = {
    text: '',
    color: '',
    backgroundColor: ''
  }

  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleColorChange = ({ target }) => {
    this.setState({ color: target.value });
  }

  handleBackgroundColorChange = ({ target }) => {
    this.setState({ backgroundColor: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return ({ 
        text: state.text
      });
    });

  }

  render() {
    return (
      <>
        <TextSelector
          text={this.state.text}
          handleTextChange={this.handleTextChange}
          handleSubmit={this.handleSubmit}
        />

        <Shape
          text={this.state.text}
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
        />

        <ColorSelector
          color={this.state.color}
          backgroundColor={this.state.backgroundColor}
          handleColorChange={this.handleColorChange}
          handleBackgroundColorChange={this.handleBackgroundColorChange}
        />
      </>
    );
  }
}
