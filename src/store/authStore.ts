import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthStore, LoginData, RegisterData, User } from '../types/auth';
import { authService } from '../services/authService';
import toast from 'react-hot-toast';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (data: LoginData) => {
        try {
          set({ isLoading: true });
          const response = await authService.login(data);
          
          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          localStorage.setItem('atabronze_token', response.token);
          toast.success('Login realizado com sucesso!');
        } catch (error: any) {
          set({ isLoading: false });
          const message = error.response?.data?.message || 'Erro ao fazer login';
          toast.error(message);
          throw error;
        }
      },

      register: async (data: RegisterData) => {
        try {
          set({ isLoading: true });
          const response = await authService.register(data);
          
          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
          });
          
          localStorage.setItem('atabronze_token', response.token);
          toast.success('Conta criada com sucesso!');
        } catch (error: any) {
          set({ isLoading: false });
          const message = error.response?.data?.message || 'Erro ao criar conta';
          toast.error(message);
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        localStorage.removeItem('atabronze_token');
        localStorage.removeItem('atabronze_user');
        toast.success('Logout realizado com sucesso!');
      },

      setUser: (user: User) => {
        set({ user });
      },

      setToken: (token: string) => {
        set({ token, isAuthenticated: true });
        localStorage.setItem('atabronze_token', token);
      },

      clearAuth: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        localStorage.removeItem('atabronze_token');
        localStorage.removeItem('atabronze_user');
      },
    }),
    {
      name: 'atabronze-auth',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
