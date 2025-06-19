import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import Cookies from "js-cookie";

import { useTheme } from "../../contexts";
import { THEME_COOKIE_KEY, ThemeMode } from "../../styles";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: SelectChangeEvent) => {
    const newTheme = event.target.value as ThemeMode;
    Cookies.set(THEME_COOKIE_KEY, newTheme);
    setTheme(newTheme);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 100 }}>
      <InputLabel
        id="theme-select-label"
        sx={{
          color: "inherit",
          "&.Mui-focused": {
            color: "inherit", // Keep same color when focused
          },
        }}
      >
        Theme
      </InputLabel>
      <Select
        labelId="theme-select-label"
        id="theme-select"
        value={theme}
        label="Theme"
        onChange={handleThemeChange}
        sx={{
          color: "inherit",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit", // Optional: make border inherit color too
            opacity: 0.2,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit", // Prevent hover color change
            opacity: 0.2,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit", // Prevent focus color change
            opacity: 0.3,
            borderWidth: 1, // Keep border width consistent
          },
        }}
      >
        {Object.values(ThemeMode).map((mode) => (
          <MenuItem key={mode} value={mode}>
            {mode.charAt(0).toUpperCase() + mode.slice(1).toLowerCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
