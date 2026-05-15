import { useState, useEffect, useCallback } from 'react';
import { api } from '../lib/api';

const SESSION_KEY = 'food-reels-session';

export function useAuth() {
  const [session, setSession] = useState(() => {
    const saved = localStorage.getItem(SESSION_KEY);
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [session]);

  const login = useCallback(async (payload, role, authView) => {
    setLoading(true);
    setError(null);
    try {
      const rolePath = role === 'partner' ? 'foodpartner' : 'user';
      const endpoint = authView === 'register'
        ? `/auth/${rolePath}/register`
        : role === 'partner'
          ? '/auth/foodpartner/login'
          : '/auth/user/loginUser';

      const data = await api.post(endpoint, payload);
      setSession({ ...data.user, role });
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      const isPartner = session?.role === 'partner';
      const endpoint = isPartner ? '/auth/foodpartner/logout' : '/auth/user/logoutUser';
      await api.post(endpoint);
    } catch (err) {
      console.warn('Logout request failed, clearing local session anyway');
    } finally {
      setSession(null);
      setLoading(false);
    }
  }, [session]);

  return {
    session,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!session,
    isPartner: session?.role === 'partner',
    setError
  };
}
