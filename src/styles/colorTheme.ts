import type { PaletteOptions } from "@mui/material";

// Theme mode types
export const ThemeMode = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];

const lightTheme: PaletteOptions = {
  primary: {
    main: "#252F9C", // Deep medical blue
    light: "#4A5FBF",
    dark: "#1A2170",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#CFE5FF", // Soft light blue
    light: "#E8F2FF",
    dark: "#A8C8E8",
    contrastText: "#1A2170",
  },
  error: {
    main: "#E74C3C",
    light: "#F1948A",
    dark: "#C0392B",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#F39C12",
    light: "#F8C471",
    dark: "#D68910",
    contrastText: "#ffffff",
  },
  info: {
    main: "#7C1034", // Medical burgundy for info
    light: "#A8455B",
    dark: "#5D0C26",
    contrastText: "#ffffff",
  },
  success: {
    main: "#27AE60",
    light: "#58D68D",
    dark: "#1E8449",
    contrastText: "#ffffff",
  },
  background: {
    default: "#DDE1E8", // Slightly warmer, less stark
    paper: "#FFFFFF",
  },
  text: {
    primary: "#2C3E50", // Dark blue-gray for readability
    secondary: "#5D6D7E",
    disabled: "#BDC3C7",
  },

  grey: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

const darkTheme: PaletteOptions = {
  primary: {
    main: "#4A5FBF", // Lighter blue for dark theme
    light: "#6B7ED6",
    dark: "#252F9C",
    contrastText: "#ffffff",
  },
  secondary: {
    main: "#2A3A5C", // Darker blue-gray for secondary
    light: "#3D4E70",
    dark: "#1F2A47",
    contrastText: "#E8F2FF",
  },
  error: {
    main: "#FF6B6B",
    light: "#FF8E8E",
    dark: "#E74C3C",
    contrastText: "#ffffff",
  },
  warning: {
    main: "#FFB347",
    light: "#FFCC73",
    dark: "#F39C12",
    contrastText: "#1A1A1A",
  },
  info: {
    main: "#B85C7A", // Softer burgundy for dark theme
    light: "#D17A9A",
    dark: "#7C1034",
    contrastText: "#ffffff",
  },
  success: {
    main: "#4ECDC4",
    light: "#7ED5D0",
    dark: "#27AE60",
    contrastText: "#1A1A1A",
  },
  background: {
    default: "#0F1419", // Very dark blue-black
    paper: "#1A2332", // Dark blue-gray for cards/papers
  },
  text: {
    primary: "#E8F2FF", // Light blue-white for primary text
    secondary: "#B0BEC5", // Medium gray-blue for secondary text
    disabled: "#546E7A", // Darker gray for disabled text
  },
  grey: {
    50: "#111827",
    100: "#1f2937",
    200: "#374151",
    300: "#4b5563",
    400: "#6b7280",
    500: "#9ca3af",
    600: "#d1d5db",
    700: "#e5e7eb",
    800: "#f3f4f6",
    900: "#f9fafb",
  },
};

// Define your color palette - Medical domain inspired
export const palettes: Record<ThemeMode, PaletteOptions> = {
  [ThemeMode.LIGHT]: lightTheme,
  [ThemeMode.DARK]: darkTheme,
};
