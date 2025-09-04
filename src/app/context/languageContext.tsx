"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Translations = {
  pt: {
    header: {
      name: "Matheus Patricio",
      profession: "Engenheiro de Software",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    about: {
      title: "Sobre",
      description: "Sou um engenheiro de software apaixonado por desenvolver soluções inovadoras.",
    },
  },
  en: {
    header: {
      name: "Matheus Patricio",
      profession: "Software Engineer",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    about: {
      title: "About",
      description: "I'm a software engineer passionate about developing innovative solutions.",
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  return context;
}
