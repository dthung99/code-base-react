import { EN } from "./dictionaries/EN";
import { VI } from "./dictionaries/VI";
import type { Dictionary } from "./Dictionary";

// Language type and constant
export const Locale = {
  EN: "EN",
  VI: "VI",
} as const;

export type Locale = (typeof Locale)[keyof typeof Locale];

export const DEFAULT_LOCALE = Locale.EN;

export const LANGUAGE_COOKIE_KEY = "language";

export const dictionaries: Record<Locale, Dictionary> = {
  [Locale.EN]: EN,
  [Locale.VI]: VI,
};
