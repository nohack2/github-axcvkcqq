"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authService, type SignUpData, type SignInData } from '@/lib/api/auth';
import { sessionManager } from '@/lib/auth/session';

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (data: SignUpData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.signUp(data);
      
      if (response.success) {
        router.push(`/verify?email=${encodeURIComponent(response.email || '')}`);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (data: SignInData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.signIn(data);
      
      if (response.success && response.token) {
        sessionManager.setToken(response.token);
        router.push('/dashboard');
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async (code: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await authService.verifyCode(code);
      
      if (response.success) {
        router.push('/signin');
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    sessionManager.clearToken();
    router.push('/signin');
  };

  return {
    signUp,
    signIn,
    signOut,
    verifyCode,
    loading,
    error,
    isAuthenticated: sessionManager.isAuthenticated()
  };
}