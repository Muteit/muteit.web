const renderHTML = (data) => {
  return (
    `<div class="container">
		<header class="header">
			<div class="row">
				<div class="donation cell">
					<div class="row">
						<div class="col-md-5">
							<img src="assets/img/logo-muteit-sound-helper-new.svg" class="mb-2"
								alt="Mute it application toilet helper">
						</div>
						<div class="col-md-3">
							<a href="https://t.me/muteitapp" target="_blank" class="bi bi-telegram">
								<i class="fab fa-telegram-plane mr-1"></i>В чат проекта в Telegram</a>
						</div>
						<div class="col-md-3">
							<a href="https://paypal.me/olianayda" target="_blank" class="bi bi-credit-card"><i
									class="fab fa-paypal mr-1"></i>Поддержать проект в PayPal</a>
						</div>
						<div class="col-md-1">
							<select class="change-lang mt-2"
								style="color: #fff; background: #000; border: solid #fff 2px ; border-radius: 10px;">
								<option value="en">EN</option>
								<option value="ru" selected>RU</option>
								<option value="de">DE</option>
								<option value="fr">FR</option>
								<option value="jp">JP</option>
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
						<h1>Воспользуйтесь шумом воды,<br>чтобы посещать туалет<br>без стеснения</h1>
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
						<strong class="play-text">Остановить</strong>
						<strong class="pause-text">Включить</strong>
					</a>
				</div>

				<div class="download-app">
					<span>Скоро будет доступно в App Store & Google Play</span>
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
				<h2>Замаскируй звуки <br>шумом воды</h2>

				<div class="row">
					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_1.svg" alt="illustration of flying poop">
						<p>
							Посещать туалет в гостях можно спокойнее. Звук воды не отвлечет друзей от беседы
						</p>
					</div>

					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_2.svg" alt="">
						<p>
							Твои друзья знают, что ты пришёл к ним посрать. Но пусть думают,
							что ты просто долго моешь руки
						</p>
					</div>

					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_3.svg" alt="">
						<p>
							К вам приехала «вторая мама», но ты не хочешь, чтобы она слышала,
							как ты ссышь
						</p>
					</div>

					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_4.svg" alt="">
						<p>
							Ты всегда включаешь воду в туалете, когда ходишь по делам.
							Зачем включать настоящую воду, когда можно электронную?
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2>Успокойся</h2>

				<div class="row">
					<div class="col-6 col-md-12 cell">
						<img src="assets/img/img_5.svg" alt="">

						<div class="row">
							<div class="col-md-3">
								<p>
									Включи воду в Mute it перед сном, чтобы расслабиться и отогнать
									мысли
								</p>
							</div>
						</div>
					</div>

					<div class="col-6 col-md-3 offset-md-3 cell">
						<img src="assets/img/img_6.svg" alt="">
						<p>
							Мы не гарантируем, что не будет слышно, как ты срёшь, но ты
							точно будешь думать, что не слышно
						</p>
					</div>

					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_7.svg" alt="">
						<p>
							Вода журчит даже когда ты свернёшь приложение, не бойся, что
							магия исчезнет, когда откроешь Инсту
						</p>
					</div>

					<div class="col-6 col-md-3 cell">
						<img src="assets/img/img_8.svg" alt="">
						<p>
							Используй звук воды из крана вместо белого шума
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2>Что будет:</h2>

				<div class="row">
					<div class="col-md-6">
						<div class="row">
							<div class="col-6">
								<h6>В Mute It</h6>
								<p>Счётчик сэкономленной воды</p>
							</div>

							<div class="col-6">
								<h6>
									В Mute it <span class="badge">Pro</span><br>
									<small class="text-muted">В процессе…</small>
								</h6>
								<p>Tрекингдефикации для контроля приёма лекарств и профилактики заболеваний</p>
							</div>

							<div class="col main-help">
								<h3>Помочь все сделать быстрее:</h3>

								<div class="row">
									<div class="col-6">
										<a href="https://paypal.me/olianayda" target="_blank" class="text-icon">
											<img src="assets/img/icon_money.svg" alt=""><span>Деньгами</span>
										</a>
									</div>

									<div class="col-6">
										<a href="https://t.me/muteitapp" target="_blank" class="text-icon">
											<img src="assets/img/icon_volunteeer.svg"
												alt="Перейти в чат telegram где общаются про социально значемый проект Muteitapp"><span>Руками
												в
												Telegram</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-5 offset-md-1">
						<strong>Первая версия уже доступна <br>для скачивания</strong>

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
	</div>`
  )
};
