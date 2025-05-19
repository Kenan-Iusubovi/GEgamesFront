import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Navbar.module.css';
import LanguageSwitcher from './LanguageToggle';

export default function Navbar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
 
  return (
    <nav className={styles.navbar}>
      <Link to="/">{t('to.home')}</Link>
      <Link to="/login">{t('auth.login')}</Link>
      
      <LanguageSwitcher />
    </nav>
  );
}