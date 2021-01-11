import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div id="display">    
    <p className="result">{result}</p>    
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
