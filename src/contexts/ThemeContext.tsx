import { CssBaseline } from "@mui/material";
import { ThemeProvider, type Theme } from "@mui/material/styles";
import Cookies from "js-cookie";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { createCustomTheme, THEME_COOKIE_KEY, ThemeMode } from "../styles";

// Context type
interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom theme provider component
export function CustomThemeProvider({ children }: { children: ReactNode }) {
  // Get initial theme from cookies or default to dark
  const getInitialTheme = (): ThemeMode => {
    const savedTheme = Cookies.get(THEME_COOKIE_KEY);
    return (savedTheme as ThemeMode) || ThemeMode.DARK;
  };

  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme);

  // Set specific theme mode
  const setTheme = (newTheme: ThemeMode) => {
    setThemeMode(newTheme);
    // Save to cookies for persistence
    Cookies.set(THEME_COOKIE_KEY, newTheme, { expires: 365 });
  };

  // Create theme based on current mode
  const currentTheme: Theme = React.useMemo(() => {
    return createCustomTheme(themeMode); // Use custom theme creator
  }, [themeMode]);

  // Context value
  const contextValue: ThemeContextType = {
    theme: themeMode,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// Custom hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    alert("useTheme must be used within a CustomThemeProvider");
    throw new Error("useTheme must be used within a CustomThemeProvider");
  }
  return context;
};

export default CustomThemeProvider;
