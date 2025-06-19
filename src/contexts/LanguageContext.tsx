import Cookies from "js-cookie";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { Locale, type Dictionary } from "../languages";
import {
  DEFAULT_LOCALE,
  dictionaries,
  LANGUAGE_COOKIE_KEY,
} from "../languages/enum";

// Language context type
export interface LanguageContextType {
  language: Locale;
  setLanguage: (lang: Locale) => void;
  t: Dictionary;
}

// Create context
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Language provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(DEFAULT_LOCALE);

  // Initialize language from cookies
  useEffect(() => {
    const savedLanguage = Cookies.get(LANGUAGE_COOKIE_KEY);
    if (
      savedLanguage &&
      Object.values(Locale).includes(savedLanguage as Locale)
    ) {
      setLanguageState(savedLanguage as Locale);
    }
  }, []);

  // Set language with cookie persistence
  const setLanguage = (lang: Locale) => {
    if (!Object.values(Locale).includes(lang)) {
      alert(`Invalid language: ${lang}`);
      return;
    }
    setLanguageState(lang);
    Cookies.set(LANGUAGE_COOKIE_KEY, lang, { expires: 365 });
  };

  // Get current translations
  const t = dictionaries[language];

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    alert("useLanguage must be used within a LanguageProvider");
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
