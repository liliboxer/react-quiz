import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Shape from './Shape';

export default class NameTag extends Component {
  state = {
    text: '',
    formattedText: ''
  }

  handleTextChange = ({ target }) => {
    this.setState({ text: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => {
      return ({ 
        formattedText: state.text, 
        text: ' ' 
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
          formattedText={this.state.formattedText}
        />
      </>
    );
  }
}
