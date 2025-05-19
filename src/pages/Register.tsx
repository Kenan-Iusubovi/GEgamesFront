import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { validateRegisterForm } from '../utils/validators/validateRegisterForm';
import type { UserDto } from '../types/UserDto'; 
import { registerUser } from '../api/auth/registerUser';

const Register: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    language: i18n.language,
  });

  const [errors, setErrors] = useState({
    login: false,
    password: false,
    confirmPassword: false,
  });

  const [touched, setTouched] = useState({
    login: false,
    password: false,
    confirmPassword: false,
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    const newErrors = validateRegisterForm(formData);
    setErrors(newErrors);
    const hasError = Object.values(newErrors).some((err) => err);
    setIsSubmitDisabled(hasError);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const user: UserDto = await registerUser(formData);
      setServerMessage(user.message || t('auth.success'));
      navigate('/login');
    } catch (error: any) {
      setServerMessage(error.message || t('auth.error'));
    }
  };

  return (
    <div>
      <h2>{t('auth.title.register')}</h2>
      <AuthForm
        formData={formData}
        onChange={handleChange}
        onBlur={handleBlur}
        onSubmit={handleSubmit}
        buttonLabel={t('auth.register')}
        errors={errors}
        touched={touched}
        isSubmitDisabled={isSubmitDisabled}
         showConfirmPassword={true}   
            />
      {serverMessage && <p>{serverMessage}</p>}
    </div>
  );
};

export default Register;
