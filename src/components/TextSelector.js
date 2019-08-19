import React from 'react';
import PropTypes from 'prop-types';


function TextSelector({ text, handleTextChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="what's yo name?">
      </input>
      <button>Submit</button>
    </form>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default TextSelector;



