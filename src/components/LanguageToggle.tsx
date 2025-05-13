import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <LanguageToggle />
    </nav>
  );
}