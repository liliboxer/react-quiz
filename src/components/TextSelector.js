import React from 'react';
import PropTypes from 'prop-types';


function TextSelector({ text }) {
  return (
    <form>
      <input type="text" value={text} placeholder="what's yo name?"></input>
      <button>Submit</button>
    </form>
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextSelector;



