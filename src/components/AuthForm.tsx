import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/AuthForm.module.css';
import buttonStyles from '../styles/Buttons.module.css';

interface AuthFormProps {
  formData: {
    login: string;
    password: string;
    confirmPassword: string;
    language: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonLabel: string;
  errors: {
    login: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
  touched: {
    login: boolean;
    password: boolean;
    confirmPassword: boolean;
  };
  isSubmitDisabled: boolean;
  showConfirmPassword: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({
  formData,
  onChange,
  onSubmit,
  onBlur,
  buttonLabel,
  errors,
  touched,
  isSubmitDisabled,
  showConfirmPassword,
}) => {
  const { t } = useTranslation();

  const inputClass = (field: keyof typeof errors) =>
    `${styles.input} ${errors[field] && touched[field] ? styles.invalid : ''}`.trim();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        name="login"
        placeholder={t('auth.login.emailOrPhone')}
        value={formData.login}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClass('login')}
        required
      />

      <input
        type="password"
        name="password"
        placeholder={t('auth.password')}
        value={formData.password}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClass('password')}
        required
      />

      {showConfirmPassword && (
        <input
          name="confirmPassword"
          type="password"
          placeholder={t('auth.confirmPassword')}
          value={formData.confirmPassword}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClass('confirmPassword')}
          required
        />
      )}

      <button
        type="submit"
        className={`${buttonStyles.button} ${buttonStyles.default}`}
        disabled={isSubmitDisabled}
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default AuthForm;
