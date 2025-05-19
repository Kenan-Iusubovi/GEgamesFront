import { isValidEmailOrPhone, isValidPassword } from "./validationHelpers";

interface RegisterFormData {
  login: string;
  password: string;
  confirmPassword: string;
  language: string;
}

interface RegisterFormErrors {
  login: boolean;
  password: boolean;
  confirmPassword: boolean;
}

export const validateRegisterForm = (formData: RegisterFormData): RegisterFormErrors => {
  const errors: RegisterFormErrors = {
    login: false,
    password: false,
    confirmPassword: false
  };

  if (!isValidEmailOrPhone(formData.login)) {
    errors.login = true;
  }

  if (!isValidPassword(formData.password)) {
    errors.password = true;
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = true;
  }

  return errors;
};
