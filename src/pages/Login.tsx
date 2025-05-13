import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authStyles from '../styles/AuthForm.module.css';
import buttonStyles from '../styles/Buttons.module.css';
import { FaGoogle, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { emailOrPhone, password });
    // TODO: Implement login logic
  };

  return (
    <div className={authStyles.container}>
      <h2>{t('auth.title.login')}</h2>

      <form onSubmit={handleLogin}
       className={authStyles.form}>

        <input
          type="text"
          placeholder={t('auth.login.emailOrPhone')}
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('auth.password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit"
        className={`${buttonStyles.button} ${buttonStyles.default}`}
        >
          {t('auth.login')}</button>

          <button
            type="button"
            className={buttonStyles.google}
            onClick={() => console.log('Gmail login')}
          >
            <FaGoogle className={buttonStyles.icon} />
            {t('auth.continueWithGoogle')}
          </button>

          <button
            type="button"
            className={buttonStyles.phone}
            onClick={() => console.log('Phone login')}
          >
            <FaPhone className={buttonStyles.icon} />
           {t('auth.continueWithPhone')}
          </button>
      
      <button
        type="button"
        onClick={() => navigate('/register')}
        className={`${buttonStyles.button} ${buttonStyles.default}`}
        >
          {t('auth.goToRegister')}
      </button>

      </form>
    </div>
  );
};

export default Login;
