import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import Cookies from "js-cookie";

import { useLanguage } from "../../contexts";
import { LANGUAGE_COOKIE_KEY, Locale } from "../../languages";

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value as Locale;
    Cookies.set(LANGUAGE_COOKIE_KEY, newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 100 }}>
      <InputLabel
        id="language-select-label"
        sx={{
          color: "inherit",
          "&.Mui-focused": {
            color: "inherit", // Keep same color when focused
          },
        }}
      >
        {t.common.language}
      </InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={language}
        label={t.common.language}
        onChange={handleLanguageChange}
        sx={{
          color: "inherit",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit",
            opacity: 0.2,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit",
            opacity: 0.3,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "inherit",
            borderWidth: 1,
            opacity: 0.3,
          },
        }}
      >
        {Object.values(Locale).map((locale) => (
          <MenuItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
