import { createContext, PropsWithChildren, useState } from "react";
import { DEFAULT_LANGUAGE } from "../constants/language";
import { noop } from "../helpers/noop";
import { Language } from "../interfaces/Language";

interface LanguageContext {
  language: Language;
  setLanguage: (language: Language) => void;
}

const initialContext: LanguageContext = {
  language: DEFAULT_LANGUAGE,
  setLanguage: noop,
};

export const languageContext = createContext(initialContext);

const LanguageContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  return (
    <languageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </languageContext.Provider>
  )
};

export default LanguageContextProvider;