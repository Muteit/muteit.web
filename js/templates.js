const getTemplate = (data, language) => {
    const t = (tag) => data?.[tag]?.[language];

    const options = [
        `<option value="en" ${language === 'en' ? 'selected' : ''}>EN</option>`,
        `<option value="ru" ${language === 'ru' ? 'selected' : ''}>RU</option>`
    ];

    const html = `
	<div class="container">
            <header class="header">
                <div class="donation cell">
                    <div class="row-link">
                        <a class="logo-link">
                            <img src="assets/img/logo-muteit-sound-helper-new.svg" alt="${t('media-logo-muteit-sound-helper')}">
                        </a>
                        <div class="donate-telegram">
                            <a href="https://t.me/muteitapp" target="_blank" class="bi bi-telegram">
                                <i class="fab fa-telegram-plane mr-1"></i>${t('cta-go-to-chat-telegram')}
                            </a>
                        </div>
                        <div class="donate-paypal">
                            <a href="https://paypal.me/olianayda" target="_blank" class="bi bi-credit-card"><i
										class="fab fa-paypal mr-1"></i>${t('cta-support-project')}
								</a>
                        </div>
                        <div class="lang-select">
                            <select class="change-lang mt-2" style="color: #fff; background: #000; border: solid #fff 2px ; border-radius: 10px;">
									${options.join()}
								</select>
                        </div>
                    </div>
                </div>
                <div class="tap cell">
                    <div class="tap-tube">
                        <img src="assets/img/tap.svg" alt="">
                    </div>
                    <div class="tap-drop">
                        <img src="assets/img/drop.svg" alt="">
                    </div>
                    <div class="tap-spray">
                        <img src="assets/img/spray.png" alt="">
                    </div>
                    <div class="tap-stream">
                        <img src="assets/img/stream.png" alt="">
                    </div>
                </div>


                <div class="container header-content">
                    <div class="row">
                        <div class="col-md-12">
                            <span class="app-name">${t('text-muteit-helper')}</span>
                            <h1>${t('text-H1-main-text-on-the-page')}</h1>
                        </div>
                    </div>


                    <div class="header-control">
                        <a href="#" class="btn control">
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g class="pause">
									<rect width="8" height="23" />
									<rect x="14" width="8" height="23" />
								</g>
								<g class="play">
									<path d="M20 12L0.499999 23.2583L0.5 0.741669L20 12Z" />
								</g>
							</svg>
                            <strong class="play-text">${t('cta-turn-off')}</strong>
                            <strong class="pause-text">${t('cta-turn-on')}</strong>
                        </a>
                    </div>

                    <div class="download-app">
                        <span>${t('text-download-app')}</span>
                    </div>

                    <div class="app-links mt-3">
                        <a href="https://t.me/muteitapp" target="_blank">
                            <img src="assets/img/apple_store.png" alt="download from google play mute it app">
                        </a>

                        <a href="https://t.me/muteitapp" target="_blank">
                            <img src="assets/img/google_play.png" alt="download from app store mute it app">
                        </a>
                    </div>
                </div>
            </header>

            <main class="main">
                <section>
                    <h2>${t('text-H2-main-feature')}</h2>

                    <div class="row">
                        <div class="col-6 col-md-3 cell">
                            <img src="assets/img/img_1.svg" alt="illustration of flying poop">
                            <p>
                                ${t('text-H1-main-text-on-the-page')}
                            </p>
                        </div>

                        <div class="col-6 col-md-3 cell">
                            <img src="assets/img/img_2.svg" alt="">
                            <p>
                                ${t('text-hand-wash-text')}
                            </p>
                        </div>

                        <div class="col-6 col-md-3 cell">
                            <img src="assets/img/img_3.svg" alt="">
                            <p>
                                ${t('text-mom-text')}
                            </p>
                        </div>

                        <div class="col-6 col-md-3 cell">
                            <img src="assets/img/img_4.svg" alt="">
                            <p>
                                ${t('text-tap-text')}
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>${t('text-H2-second-feature')}</h2>

                    <div class="row">
                        <div class="col-6 col-md-12 cell">
                            <img src="assets/img/img_5.svg" alt="">

                            <div class="row">
                                <div class="col-md-3">
                                    <p>
                                        ${t('text-relax-text')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-3 offset-md-3 cell">
                            <img src="assets/img/img_6.svg" alt="">
                            <p>
                                ${t('text-happy-text')}
                            </p>
                        </div>

                        <div class="col-6 col-md-3 cell">
                            <img src="assets/img/img_7.svg" alt="">
                            <p>
                                ${t('text-mobility-text')}
                            </p>
                        </div>

                        <div class="col-6 col-md-3 cell">
                            <img src="assets/img/img_8.svg" alt="">
                            <p>
                                ${t('text-chilling-text')}
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>${t('text-section-what-is-next')}</h2>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-6">
                                    <h6>В Mute It</h6>
                                    <p>${t('text-updates-description-text')}</p>
                                </div>

                                <div class="col-6">
                                    <h6>
                                        В Mute it <span class="badge">Pro</span><br>
                                        <small class="text-muted">${t('text-in-process-text')}</small>
                                    </h6>
                                    <p>${t('text-ecosystem-description-text')}</p>
                                </div>

                                <div class="col main-help">
                                    <h3>${t('text-H3-donating-text')}</h3>

                                    <div class="row">
                                        <div class="col-6">
                                            <a href="https://paypal.me/olianayda" target="_blank" class="text-icon">
                                                <img src="assets/img/icon_money.svg" alt=""><span>${t('text-H3-donating-text')}</span>
                                            </a>
                                        </div>

                                        <div class="col-6">
                                            <a href="https://t.me/muteitapp" target="_blank" class="text-icon">
                                                <img src="assets/img/icon_volunteeer.svg" alt="Перейти в чат telegram где общаются про социально значимый проект Muteitapp"><span>${t('url-volunteer-text')}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-5 offset-md-1">
                            <strong>${t('text-download-text')}</strong>

                            <div class="app-links">
                                <a href="https://t.me/muteitapp" target="_blank">
                                    <img src="assets/img/apple_store.png" alt="">
                                </a>

                                <a href="https://t.me/muteitapp" target="_blank">
                                    <img src="assets/img/google_play.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer class="footer row">
                <div class="col-sm-3">
                    <a class="bi bi-box-arrow-right" href="https://unicornwitnesses.com" target="_blank">${t('text-made-by-text')}</a>
                </div>
                <div class="col-sm-3">
                    <div class="d-flex flex-column">
                        <a class="bi bi-box-arrow-right text-light p-2" href="http://olianayda.com" target="_blank">olianayda.com</a>
                        <a class="bi bi-box-arrow-right text-light p-2" href="http://alexdolbun.com" target="_blank">alexdolbun.com</a>
                        <a class="bi bi-box-arrow-right text-light p-2" href="https://alexandrverevkin.com/" target="_blank">alexandrverevkin.com</a>
                        <a class="bi bi-box-arrow-right text-light p-2" href="https://maximlitvinov.me" target="_blank">maximlitvinov.me</a>
                        <a class="bi bi-box-arrow-right text-light p-2" href="https://juliaudovichenko.com" target="_blank">juliaudovichenko.com</a>
                        <a class="bi bi-box-arrow-right text-light p-2" href="https://evgenykhristenko.com" target="_blank">evgenykhristenko.com</a>
                        <a class="bi bi-box-arrow-right text-light p-2" href="https://nikitakhristenko.com" target="_blank">nikitakhristenko.com</a>
                    </div>
                </div>
                <div class="col-sm-3">
                    <a class="bi bi-telegram" href="https://t.me/muteitapp" target="_blank">${t('text-how-create-project-telegram')}</a>
                </div>
            </footer>
        </div>

        <div class="player d-none">
            <div class="container">
                <div class="player-box">
                    <div class="row">
                        <div class="col-lg-5 d-flex align-items-center controls">
                            <a href="#" class="btn control">
                                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g class="pause">
										<rect width="8" height="23" />
										<rect x="14" width="8" height="23" />
									</g>
									<g class="play">
										<path d="M20 12L0.499999 23.2583L0.5 0.741669L20 12Z" />
									</g>
								</svg>
                            </a>

                            <h3>${t('text-noise-text')}</h3>
                        </div>

                        <div class="col-lg-7 d-none d-md-block">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                    <div class="app-links">
                                        <span class="text-muted">${t('text-abordable-picture')}</span>
                                        <div class="break"></div>

                                        <a href="https://t.me/muteitapp" target="_blank">
                                            <img src="assets/img/apple_store.png" alt="">
                                        </a>

                                        <a href="https://t.me/muteitapp" target="_blank">
                                            <img src="assets/img/google_play.png" alt="">
                                        </a>
                                    </div>
                                </div>

                                <a href="https://www.tinkoff.ru/sl/59PjxlhKLLY" target="_blank" class="btn text-icon">
                                    <img src="assets/img/icon_money.svg" alt="Переходите на сайт эквайера Tinkoff и ">
                                    <span>${t('media-download-GooglePlay-icon')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	`;

    return html;
};
