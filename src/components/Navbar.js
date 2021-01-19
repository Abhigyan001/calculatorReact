import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link to="/" className={styles.link1}>Math Magicians</Link>
      </div>
      <div className={styles.right}>
        <Link to="/" className={styles.link}>Home </Link>
        <Link to="/Calculator" className={styles.link}>Calculator </Link>
        <Link to="/Quote" className={styles.link}>Quote </Link>
      </div>
    </div>
  );
}

export default Navbar;
