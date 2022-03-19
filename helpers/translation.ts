import React from "react";
import { Language } from "../interfaces/Language";
import { TranslationsData } from "../interfaces/Translations";

export const translate = (key: string, language: Language, data: TranslationsData) =>
  data?.[key]?.[language] || '';
