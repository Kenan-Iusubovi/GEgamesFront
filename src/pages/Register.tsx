import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGoogle, FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import authStyles from '../styles/AuthForm.module.css';
import buttonStyles from '../styles/Buttons.module.css';

function Register() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={authStyles.container}>
      <h2>{t('auth.title.register')}</h2>

      <form className={authStyles.form}>

        <input type="email" placeholder={t('auth.email')} required />
        <input type="password" placeholder={t('auth.password')} required />
        <input type="password" placeholder={t('auth.password')} required />

        <button type="submit" className={`${buttonStyles.button} ${buttonStyles.default}`}>
          {t('auth.register')}
        </button>

          <button type="button" className={`${buttonStyles.button} ${buttonStyles.google}`}>
            <FaGoogle className={buttonStyles.icon} />
            {t('auth.continueWithGoogle')}
          </button>

          <button type="button" className={`${buttonStyles.button} ${buttonStyles.phone}`}>
            <FaPhone className={buttonStyles.icon} />
            {t('auth.continueWithPhone')}
          </button>
        

      <button
        type="button"
        onClick={() => navigate('/login')}
        className={`${buttonStyles.button} ${buttonStyles.default}`}
      >
        {t('auth.goToLogin')}
      </button>

      </form>
    </div>
  );
}

export default Register;
