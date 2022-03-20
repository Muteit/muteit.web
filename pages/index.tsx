import type { NextPage } from 'next';
import Head from 'next/head';
import { ChangeEvent, useContext, useEffect } from 'react';
import { languageContext } from '../contexts/language';
import useTranslation from '../hooks/useTranslation';
import { Language } from '../interfaces/Language';

export const initSounds = () => {
  let d = document;
  let audio = d.querySelector('#audio');
  let tap = d.querySelector('.tap');
  let buttons = d.querySelectorAll('.btn.control');
  if (!audio || !buttons || !tap || !d) {
    return;
  }

  audio.addEventListener('timeupdate', function () {
    //@ts-ignore
    if (this.currentTime > this.duration - .44) {
      //@ts-ignore
      this.currentTime = 0;
      //@ts-ignore
      this.play();
    }
  });

  const playAudio = (obj: any) => {
    let stopAttempt = setInterval(() => {
      let promise = obj.play();

      if (promise) {
        promise.then(() => {
          clearInterval(stopAttempt);
        }).catch(console.log);
      }
    }, 100);
  }

  const control = (e: any) => {
    if (!audio) {
      return;
    }

    //@ts-ignore
    if (audio.paused) {
      playAudio(audio);
    } else {
      //@ts-ignore
      audio.pause();
    }
    // @ts-ignore
    [tap, ...buttons].forEach(btn => {
      btn.classList.toggle('play');
    });

    e.preventDefault();
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', control);
    btn.addEventListener('touchstart', control);
  });
};

const Home: NextPage = () => {
  const translate = useTranslation();
  const { language, setLanguage } = useContext(languageContext);

  const onChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    if (Object.values(Language).includes(newLanguage)) {
      setLanguage(e.target.value as Language);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      initSounds();
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(m, e, t, r, i, k, a) {
            m[i] = m[i] || function() {
              (m[i].a = m[i].a || []).push(arguments)
            };
            m[i].l = 1 * new Date();
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
          })
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(80088001, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
            ecommerce: "dataLayer"
          });`
        }}>
        </script>
        {/* <!-- /Yandex.Metrika counter --> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-33FDFN66NC"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-33FDFN66NC');`
        }}>
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Mute It – toilet sound helper</title>
        <meta property="og:site_name" content="muteit.app" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://muteit.app/" />
        <meta property="og:title" content="Mute it app — приложение для комфортного пребывания в туалете" />
        <meta property="og:description" content="Приятный звук воды поможет заглушить ваши и чужие туалетные звуки, поможет абстрагироваться в некомфортном туалете, остаться наедине с собой" />
        <meta property="og:image" content="https://muteit.app/static/img/og-img-screenshot.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="2402" />
        <meta property="og:image:height" content="1506" />
        <meta property="vk:image" content="https://muteit.app/static/img/vk-img-website-tap-with-text-cta-logo.jpg" />
        <meta property="vk:image:width" content="510" />
        <meta property="vk:image:height" content="228" />
        <meta property="twitter:image" content="https://muteit.app/static/img/twitter-img-website-tap-with-text-cta-logo.jpg" />
        <meta property="twitter:image:width" content="1024" />
        <meta property="twitter:image:height" content="512" />
        <meta property="fb:app_id" content="muteitapp" />
        <link rel="shortcut icon" href="favicon.ico" />
        <script src="https://kit.fontawesome.com/afc3bbd3da.js" crossOrigin="anonymous"></script>
      </Head>
      <div id="content">
        <div className="container">
          <header className="header">
            <div className="donation cell">
              <div className="row-link">
                <a className="logo-link">
                  <img loading="lazy" src="../static/img/logo-muteit-sound-helper-new.svg" alt="{translate('media-logo-muteit-sound-helper')}" />
                </a>
                <div className="donate-telegram">
                  <a href="https://t.me/muteitapp" target="_blank" className="bi bi-telegram">
                    <i className="fab fa-telegram-plane mr-1"></i>{translate('cta-go-to-chat-telegram')}
                  </a>
                </div>
                <div className="donate-paypal">
                  <a href="https://paypal.me/olianayda" target="_blank" className="bi bi-credit-card"><i
                    className="fab fa-paypal mr-1"></i>{translate('cta-support-project')}
                  </a>
                </div>
                <div className="lang-select">
                  <select value={language} onChange={onChangeLanguage} className="change-lang mt-2">
                    {Object.values(Language).map((lang) => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="tap cell">
              <div className="tap-tube">
                <img loading="lazy" src="../static/img/tap.svg" alt="" />
              </div>
              <div className="tap-drop">
                <img loading="lazy" src="../static/img/drop.svg" alt="" />
              </div>
              <div className="tap-spray">
                <img loading="lazy" src="../static/img/spray.png" alt="" />
              </div>
              <div className="tap-stream">
                <img loading="lazy" src="../static/img/stream.png" alt="" />
              </div>
            </div>


            <div className="container header-content">
              <div className="row">
                <div className="col-md-12">
                  <span className="app-name">{translate('text-muteit-helper')}</span>
                  <h1>{translate('text-H1-main-text-on-the-page')}</h1>
                </div>
              </div>


              <div className="header-control">
                <a href="#" className="btn control">
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g className="pause">
                      <rect width="8" height="23" />
                      <rect x="14" width="8" height="23" />
                    </g>
                    <g className="play">
                      <path d="M20 12L0.499999 23.2583L0.5 0.741669L20 12Z" />
                    </g>
                  </svg>
                  <strong className="play-text">{translate('cta-turn-off')}</strong>
                  <strong className="pause-text">{translate('cta-turn-on')}</strong>
                </a>
              </div>

              <div className="download-app">
                <span>{translate('text-download-app')}</span>
              </div>

              <div className="app-links mt-3">
                <a href="https://t.me/muteitapp" target="_blank">
                  <img loading="lazy" src="../static/img/apple_store.png" alt="download from google play mute it app" />
                </a>

                <a href="https://t.me/muteitapp" target="_blank">
                  <img loading="lazy" src="../static/img/google_play.png" alt="download from app store mute it app" />
                </a>
              </div>
            </div>
          </header>

          <main className="main">
            <section>

              <div className="soon_product_container">
                <div>
                  <div className="soon_product soon_product_update">
                    <h3 className="soon-text-font">
                      {translate('update-text')}
                    </h3>
                    <ul className="soon-description-font">
                      {translate('updates-description-text')}
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="soon_product soon_product_ecosystem">
                    <h3 className="soon-text-font">
                      {translate('ecosystem-text')}
                    </h3>
                    <ul className="soon-description-font">
                      {translate('ecosystem-description-text')}
                    </ul>
                  </div>
                </div>
              </div>

            </section>

            <section>
              <h2>{translate('text-H2-main-feature')}</h2>

              <div className="row">
                <div className="col-6 col-md-3 cell">
                  <img loading="lazy" src="../static/img/img_1.svg" alt="illustration of flying poop" />
                  <p>
                    {translate('text-H1-main-text-on-the-page')}
                  </p>
                </div>

                <div className="col-6 col-md-3 cell">
                  <img loading="lazy" src="../static/img/img_2.svg" alt="" />
                  <p>
                    {translate('text-hand-wash-text')}
                  </p>
                </div>

                <div className="col-6 col-md-3 cell">
                  <img loading="lazy" src="../static/img/img_3.svg" alt="" />
                  <p>
                    {translate('text-mom-text')}
                  </p>
                </div>

                <div className="col-6 col-md-3 cell">
                  <img loading="lazy" src="../static/img/img_4.svg" alt="" />
                  <p>
                    {translate('text-tap-text')}
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2>{translate('text-H2-second-feature')}</h2>

              <div className="row">
                <div className="col-6 col-md-12 cell">
                  <img loading="lazy" src="../static/img/img_5.svg" alt="" />

                  <div className="row">
                    <div className="col-md-3">
                      <p>
                        {translate('text-relax-text')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-3 offset-md-3 cell">
                  <img loading="lazy" src="../static/img/img_6.svg" alt="" />
                  <p>
                    {translate('text-happy-text')}
                  </p>
                </div>

                <div className="col-6 col-md-3 cell">
                  <img loading="lazy" src="../static/img/img_7.svg" alt="" />
                  <p>
                    {translate('text-mobility-text')}
                  </p>
                </div>

                <div className="col-6 col-md-3 cell">
                  <img loading="lazy" src="../static/img/img_8.svg" alt="" />
                  <p>
                    {translate('text-chilling-text')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>{translate('text-section-what-is-next')}</h2>

              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <h6>В Mute It</h6>
                      <p>{translate('text-updates-description-text')}</p>
                    </div>

                    <div className="col-6">
                      <h6>
                        В Mute it <span className="badge">Pro</span><br />
                        <small className="text-muted">{translate('text-in-process-text')}</small>
                      </h6>
                      <p>{translate('text-ecosystem-description-text')}</p>
                    </div>

                    <div className="col main-help">
                      <h3>{translate('text-H3-donating-text')}</h3>

                      <div className="row">
                        <div className="col-6">
                          <a href="https://paypal.me/olianayda" target="_blank" className="text-icon">
                            <img loading="lazy" src="../static/img/icon_money.svg" alt="" /><span>{translate('text-H3-donating-text')}</span>
                          </a>
                        </div>

                        <div className="col-6">
                          <a href="https://t.me/muteitapp" target="_blank" className="text-icon">
                            <img loading="lazy" src="../static/img/icon_volunteeer.svg" alt="Перейти в чат telegram где общаются про социально значимый проект Muteitapp" /><span>{translate('url-volunteer-text')}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-5 offset-md-1">
                  <strong>{translate('text-download-text')}</strong>

                  <div className="app-links">
                    <a href="https://t.me/muteitapp" target="_blank">
                      <img loading="lazy" src="../static/img/apple_store.png" alt="" />
                    </a>

                    <a href="https://t.me/muteitapp" target="_blank">
                      <img loading="lazy" src="../static/img/google_play.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="footer row">
            <div className="col-sm-3">
              <a className="bi bi-box-arrow-right" href="https://unicornwitnesses.com" target="_blank">{translate('text-made-by-text')}</a>
            </div>
            <div className="col-sm-3">
              <div className="d-flex flex-column">
                <a className="bi bi-box-arrow-right text-light p-2" href="http://olianayda.com" target="_blank">olianayda.com</a>
                <a className="bi bi-box-arrow-right text-light p-2" href="http://alexdolbun.com" target="_blank">alexdolbun.com</a>
								<a className="bi bi-box-arrow-right text-light p-2" href="https://nikitakhristenko.com" target="_blank">nikitakhristenko.com</a>
								<a className="bi bi-box-arrow-right text-light p-2" href="https://evgenykhristenko.com" target="_blank">evgenykhristenko.com</a>
                <a className="bi bi-box-arrow-right text-light p-2" href="https://alexandrverevkin.com/" target="_blank">alexandrverevkin.com</a>
                <a className="bi bi-box-arrow-right text-light p-2" href="https://maximlitvinov.me" target="_blank">maximlitvinov.me</a>
              </div>
            </div>
            <div className="col-sm-3">
              <a className="bi bi-telegram" href="https://t.me/muteitapp" target="_blank">{translate('text-how-create-project-telegram')}</a>
            </div>
          </footer>
        </div>

        <div className="player d-none">
          <div className="container">
            <div className="player-box">
              <div className="row">
                <div className="col-lg-5 d-flex align-items-center controls">
                  <a href="#" className="btn control">
                    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g className="pause">
                        <rect width="8" height="23" />
                        <rect x="14" width="8" height="23" />
                      </g>
                      <g className="play">
                        <path d="M20 12L0.499999 23.2583L0.5 0.741669L20 12Z" />
                      </g>
                    </svg>
                  </a>

                  <h3>{translate('text-noise-text')}</h3>
                </div>

                <div className="col-lg-7 d-none d-md-block">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="app-links">
                        <span className="text-muted">{translate('text-abordable-picture')}</span>
                        <div className="break"></div>

                        <a href="https://t.me/muteitapp" target="_blank">
                          <img loading="lazy" src="../static/img/apple_store.png" alt="" />
                        </a>

                        <a href="https://t.me/muteitapp" target="_blank">
                          <img loading="lazy" src="../static/img/google_play.png" alt="" />
                        </a>
                      </div>
                    </div>

                    <a href="https://www.tinkoff.ru/sl/59PjxlhKLLY" target="_blank" className="btn text-icon">
                      <img loading="lazy" src="../static/img/icon_money.svg" alt="Переходите на сайт эквайера Tinkoff" />
                      <span>{translate('media-download-GooglePlay-icon')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <audio id="audio" preload="none" loop>
        <source src="../static/assets/audio/watertap.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default Home;
