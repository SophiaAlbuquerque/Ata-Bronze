import api from './api';
import { LoginData, RegisterData, AuthResponse, User } from '../types/auth';

export const authService = {
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await api.post('/users/login', data);
    return response.data;
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post('/users/register', data);
    return response.data;
  },

  async getProfile(): Promise<User> {
    const response = await api.get('/users/profile');
    return response.data;
  },

  async updateProfile(data: Partial<User>): Promise<User> {
    const response = await api.put('/users/profile', data);
    return response.data;
  },

  async forgotPassword(email: string): Promise<void> {
    await api.post('/users/forgot-password', { email });
  },

  async resetPassword(token: string, password: string): Promise<void> {
    await api.post('/users/reset-password', { token, password });
  },

  async refreshToken(): Promise<AuthResponse> {
    const response = await api.post('/users/refresh-token');
    return response.data;
  },
};
