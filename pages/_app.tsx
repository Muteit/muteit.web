import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/Home.css'
import type { AppProps } from 'next/app'
import LanguageContextProvider from '../contexts/language';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <Component {...pageProps} />
    </LanguageContextProvider>
  );
}

export default MyApp
