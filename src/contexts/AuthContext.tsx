import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { PATHS } from "../constants";
import type { User } from "../models";
import { authService } from "../services";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (provider: "google" | "microsoft") => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AUTH_TOKEN = "authToken";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current route requires authentication
  const isPublicRoute = [PATHS.login].includes(location.pathname);

  const fetchCurrentUser = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await authService.getCurrentUser();
      setUser(userData);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch user";
      setError(errorMessage);
      setUser(null);

      // Redirect to login if not on a public route
      if (!isPublicRoute) {
        navigate(PATHS.login);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (provider: "google" | "microsoft") => {
    try {
      setLoading(true);
      setError(null);

      // TODO: Implement actual OAuth flow
      alert(`${provider} login will be implemented here`);

      // For now, simulate successful login
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Fetch user data after successful login
      await fetchCurrentUser();
      localStorage.setItem(AUTH_TOKEN, "dummy-token");

      // Redirect to home page
      navigate(PATHS.home);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : `${provider} login failed`;
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      // TODO: Implement actual logout API call
      // await authService.logout();

      // Clear user state
      setUser(null);
      setError(null);

      // Clear any stored tokens
      alert(`removing ${AUTH_TOKEN} from localStorage`);
      localStorage.removeItem(AUTH_TOKEN);

      // Redirect to login
      navigate(PATHS.login);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Logout failed";
      setError(errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const refreshUser = async () => {
    await fetchCurrentUser();
  };

  // Check authentication on mount and route changes
  useEffect(() => {
    if (user !== null) return; // User already loaded

    const token = localStorage.getItem(AUTH_TOKEN);

    if (token) {
      // If we have a token, try to fetch user
      fetchCurrentUser();
    } else if (!isPublicRoute) {
      // No token and trying to access protected route
      setLoading(false);
      navigate(PATHS.login);
    } else {
      // On public route without token (like login page)
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: AuthContextType = {
    user,
    loading,
    error,
    login,
    logout,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
