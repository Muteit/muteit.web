import { Language } from "./Language";

export interface TranslationsData {
  [key: string]: Record<Language, string>
}
