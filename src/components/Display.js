import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Display = ({ total, next, operation }) => (
  <div className={styles.display}>
    <p>{next || total}</p>
    <span className={styles.displaySpan}>
      {next && (total || null)}
      {' '}
      {operation || null}
    </span>
  </div>
);

Display.defaultProps = {
  total: '0',
  next: undefined,
  operation: undefined,
};

Display.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
