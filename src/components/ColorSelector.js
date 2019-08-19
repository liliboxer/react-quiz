import React from 'react';
import PropTypes from 'prop-types';

function ColorSelector({ fontColor, backgroundColor }) {
  return (
    <form>
      <input type="color" name="fontColor" value={fontColor} onChange={this.handleFontColorChange}></input>
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={this.handleBackgroundColorChange}></input>
    </form>
  );
}

ColorSelector.propTypes = {
  fontColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ColorSelector;
