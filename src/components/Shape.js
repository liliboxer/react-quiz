import React from 'react';
import PropTypes from 'prop-types';

function Shape({ text }) {
  return (
    <>
      <p>{text}</p>
    </>
  );
}

Shape.propTypes = {
  text: PropTypes.string.isRequired
};

export default Shape;

