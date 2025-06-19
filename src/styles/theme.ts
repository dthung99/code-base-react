import {
  createTheme,
  type BreakpointsOptions,
  type Components,
  type Theme,
  type ThemeOptions,
  type TypographyVariantsOptions,
} from "@mui/material/styles";

import { palettes, type ThemeMode } from "./colorTheme";

// Cookie key for theme persistence
export const THEME_COOKIE_KEY = "theme-mode";

// Define breakpoints
const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

// TODO: changing font size base on screen size
// Define typography
const typography: TypographyVariantsOptions = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: "2.5rem",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.43,
  },
};

// Override MUI components if needed
const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none", // Disable auto capitalization
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      a: {
        textDecoration: "none !important",
        "&:hover": {
          textDecoration: "none !important",
        },
        "&:focus": {
          textDecoration: "none !important",
        },
        "&:active": {
          textDecoration: "none !important",
        },
        "&:visited": {
          textDecoration: "none !important",
        },
      },
    },
  },
};

export function createCustomTheme(mode: ThemeMode): Theme {
  // Create theme options
  const themeOptions: ThemeOptions = {
    palette: palettes[mode],
    breakpoints,
    typography,
    shape: {
      borderRadius: 8,
    },
    components,
  };

  return createTheme(themeOptions);
}
