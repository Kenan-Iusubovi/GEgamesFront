import axios from 'axios';
import type { UserDto } from '../../types/UserDto';

interface RegisterPayload {
  login: string;
  password: string;
  confirmPassword: string;
  language: string;
}

export const registerUser = async (payload: RegisterPayload): Promise<UserDto> => {
  const response = await axios.post<UserDto>('api/auth/registration', {
    login: payload.login,
    password: payload.password,
    language: payload.language
  });
  return response.data;
};
