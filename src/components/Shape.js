import React from 'react';
import PropTypes from 'prop-types';

function Shape({ formattedText }) {
  return (
    <>
      <pre>{formattedText}</pre>
    </>
  );
}

Shape.propTypes = {
  formattedText: PropTypes.string.isRequired
};

export default Shape;

