import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ color, backgroundColor, handleColorChange, handleBackgroundColorChange }) {
  return (
    <form>
      <input type="color" name="color" value={color} onChange={(event) => handleColorChange(event)}></input>
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={(event) => handleBackgroundColorChange(event)}></input>
    </form>
  );
}

ColorSelector.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  handleColorChange: PropTypes.func.isRequired,
  handleBackgroundColorChange: PropTypes.func.isRequired
};

export default ColorSelector;
