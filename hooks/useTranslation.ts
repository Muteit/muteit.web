import { createElement, Fragment, useContext } from "react";
import { languageContext } from "../contexts/language";
import { translate } from "../helpers/translation";
import translations from "../translations";

type useTranslation = () => (key: string) => JSX.Element;

const useTranslation: useTranslation = () => {
  const { language } = useContext(languageContext);

  return (key: string) => createElement(
    'span',
    {
      dangerouslySetInnerHTML: { __html: translate(key, language, translations) }
    }
  );
};

export default useTranslation;