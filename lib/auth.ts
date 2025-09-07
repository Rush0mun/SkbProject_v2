// Simple authentication utilities for admin panel
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

const AUTH_KEY = 'admin_auth';

export const authUtils = {
  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    const auth = localStorage.getItem(AUTH_KEY);
    return !!auth;
  },

  // Get current user
  getCurrentUser: (): AuthUser | null => {
    if (typeof window === 'undefined') return null;
    const auth = localStorage.getItem(AUTH_KEY);
    return auth ? JSON.parse(auth) : null;
  },

  // Login user
  login: (user: AuthUser): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  },

  // Logout user
  logout: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_KEY);
  }
};