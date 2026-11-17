import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import ru from "./ru";
import ky from "./ky";

const DICTS = { ru, ky };
const STORAGE_KEY = "porter-lang";

const LangContext = createContext({ t: ru, lang: "ru", setLang: () => {} });

const readInitial = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && DICTS[saved]) return saved;
  } catch {
    /* localStorage может быть недоступен */
  }
  return "ru";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(readInitial);
  const t = DICTS[lang];

  const setLang = useCallback((next) => {
    if (!DICTS[next]) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.metaTitle;
  }, [t]);

  const value = useMemo(() => ({ t, lang, setLang }), [t, lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
export const LANGS = Object.values(DICTS).map((d) => ({ code: d.code, label: d.label }));
