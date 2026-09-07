import { createContext, useContext, useState, ReactNode } from 'react';
import { type Lang, translations } from '../i18n/translations';

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof translations)['en'] | (typeof translations)['fa'];
  savedPlaces: string[];
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [savedPlaces, setSavedPlaces] = useState<string[]>([]);

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.dir = l === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = l;
  };

  const toggleSaved = (id: string) => {
    setSavedPlaces(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedPlaces.includes(id);

  return (
    <AppContext.Provider value={{ lang, setLang, t: translations[lang], savedPlaces, toggleSaved, isSaved }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
