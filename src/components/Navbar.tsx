import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const { i18n } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <select onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
        <option value="en">EN</option>
        <option value="ka">GE</option>
      </select>
    </nav>
  );
}