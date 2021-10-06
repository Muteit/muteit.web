const getTemplate = (data, language) => {
	const t = (tag) => data?.[tag]?.[language];

	const options = [
		`<option value="en" ${language === 'en' ? 'selected' : ''}>EN</option>`,
		`<option value="ru" ${language === 'ru' ? 'selected' : ''}>RU</option>`
	];

	const html = `
		<div class="container">
			<header class="header">
				<div class="row">
					<div class="donation cell">
						<div class="row">
							<div class="col-md-5">

							</div>
							<div class="col-md-3">
								<a href="${t('url-support-project')}" target="_blank" class="bi bi-telegram">
									<i class="fab fa-telegram-plane mr-1"></i>${t('url-join-chat')}</a>
							</div>
							<div class="col-md-3">
								<a href="t('url-support-project')" target="_blank" class="bi bi-credit-card"><i
									class="fab fa-paypal mr-1"></i>${t('cta-support-project')}</a>
							</div>
							<div class="col-md-1">
								<select class="change-lang mt-2"
									style="color: #fff; background: #000; border: solid #fff 2px ; border-radius: 10px;">
									${options.join('')}
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="tap col-6 col-md-6 cell">
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
							<span class="app-name">Mute it app – карманный помощник в туалете</span>
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
							<strong class="play-text">${t('cta-turn-on')}</strong>
							<strong class="pause-text">${t('cta-turn-off')}</strong>
						</a>
					</div>

					<div class="download-app">
						<span>${t('text-download-app')}</span>
					</div>

					<div class="app-links mt-3">
						<a href="${t('url-download-appstore-icon')}" target="_blank">
							<img src="assets/img/apple_store.png" alt="${t('media-download-appstore-icon')}">
						</a>

						<a href="${t('url-download-GooglePlay-icon')}" target="_blank">
							<img src="assets/img/google_play.png" alt="${t('media-download-GooglePlay-icon')}">
						</a>
					</div>
				</div>
			</header>

			<main class="main">
				<section>
					<h2>${t('text-H2-main-feature')}</h2>

					<div class="row">
						<div class="col-6 col-md-3 cell">
							<img src="assets/img/img_1.svg" alt="${t('media-balloon-picture')}">
							<p>
							${t('text-balloon-text')}
							</p>
						</div>

						<div class="col-6 col-md-3 cell">
							<img src="assets/img/img_2.svg" alt="${t('media-hand-wash-picture')}">
							<p>
							${t('text-hand-wash-text')}
							</p>
						</div>

						<div class="col-6 col-md-3 cell">
							<img src="assets/img/img_3.svg" alt="${t('media-mom-text')}">
							<p>
								${t('text-mom-text')}
							</p>
						</div>

						<div class="col-6 col-md-3 cell">
							<img src="assets/img/img_4.svg" alt="${t('media-tap-picture')}>
							<p>
								${t('text-tap-text')}
							</p>
						</div>
					</div>
				</section>

				<section>
					<h2>
						${t('text-H2-second-feature')}
					</h2>

						<div class="row">
							<div class="col-md-3">
								<p>
								${t('text-relax-text')}
								</p>
							</div>
						</div>

					<div class="col-6 col-md-3 offset-md-3 cell">
						<img src="assets/img/img_6.svg" alt="${t('meia-happy-picture')}">
						<p>
						${t('text-happy-text')}
						</p>
					</div>

					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_7.svg" alt="${t('media-mobility-picture')}">
						<p>
						${t('text-mobility-text')}
						</p>
					</div>

					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_8.svg" alt="${t('media-chilling-picture')}">
						<p>
						${t('text-chilling-text')}
						</p>
					</div>
				</section>

			<section>
				<h2>${t('text-H2-what-includes-app')}</h2>

				<div class="row">
					<div class="col-md-6">
						<div class="row">
							<div class="col-6">
								<h6>${t('updates-text')}</h6>
								<p>${t('updates-description-text')}</p>
							</div>

							<div class="col-6">
								<h6>
								${t('ecosystem-text')} <span class="badge">Pro</span><br>
									// <small class="text-muted">В процессе…</small>
								</h6>
								<p>${t('text-ecosystem-description-text')}</p>
							</div>

							<div class="col main-help">
								<h3>${t('text-H3-donating-text')}</h3>

								<div class="row">
									<div class="col-6">
										<a href="https://paypal.me/olianayda" target="_blank" class="text-icon">
											<img src="assets/img/icon_money.svg" alt=""><span>${t('text-money-text')}</span>
										</a>
									</div>

									<div class="col-6">
										<a href="https://t.me/muteitapp" target="_blank" class="text-icon">
											<img src="assets/img/icon_volunteeer.svg"
												alt="Перейти в чат telegram где общаются про социально значемый проект Muteitapp"><span>${t('text-money-text')}</span>
										</a>
									</div>
								</div>
							</div>
						</div>

					<div class="col-md-5 offset-md-1">
						<strong>${t('download-text')}</strong>

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
					<a class="bi bi-box-arrow-right" href="https://unicornwitnesses.com" target="_blank">Проект создан при
						участии
						некоммерческого комьюнити "Свидетели Единорога", подробнее про них тут</a>
				</div>
			</section>
		</main>

		<footer class="footer row">
			<div class="col-sm-3">
				<a class="bi bi-box-arrow-right" href="https://unicornwitnesses.com" target="_blank">${('text-made-by-text')}</a>
			</div>
			<div class="col-sm-3">
				<div class="d-flex flex-column">
					<a class="bi bi-box-arrow-right text-light p-2" href="http://olianayda.com"
						target="_blank">olianayda.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="http://alexdolbun.com"
						target="_blank">alexdolbun.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://alexandrverevkin.com/"
						target="_blank">alexandrverevkin.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://maximlitvinov.me"
						target="_blank">maximlitvinov.me</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://juliaudovichenko.com"
						target="_blank">juliaudovichenko.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://evgenykhristenko.com"
						target="_blank">evgenykhristenko.com</a>
					<a class="bi bi-box-arrow-right text-light p-2" href="https://nikitakhristenko.com"
						target="_blank">nikitakhristenko.com</a>
				</div>
				<div class="col-sm-3">
					<a class="bi bi-telegram" href="https://t.me/muteitapp" target="_blank">Как создавался проект, открытый
						чат в
						Telegram</a>
				</div>
			</footer>
		</div>

		<div class="player d-none">
			<div class="container">
				<div class="player-box">
					<div class="row">
						<div class="col-lg-5 d-flex align-items-center controls">
							<a href="#" class="btn control">
								<svg width="22" height="23" viewBox="0 0 22 23" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<g class="pause">
										<rect width="8" height="23" />
										<rect x="14" width="8" height="23" />
									</g>
									<g class="play">
										<path d="M20 12L0.499999 23.2583L0.5 0.741669L20 12Z" />
									</g>
								</svg>
							</a>

							<h3>Шум воды из под крана</h3>
						</div>

						<div class="col-lg-7 d-none d-md-block">
							<div class="d-flex justify-content-between">
								<div class="d-flex align-items-center">
									<div class="app-links">
										<span class="text-muted">Доступно:</span>
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
									<span>Помочь проекту деньгами на сайте Tinkoff</span>
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
