const getTranslations = async () => {
	const response = await fetch('https://muteit-web-multi-language-db.maximlitvinov.workers.dev');
	const translations = await response.json();
	return translations;
};

const translations = {
	"media-logo-muteit-sound-helper": {
		"ru": "Логотип Mute it app в виде перевёрнутой на бок капли. Капля состоит из полукругов, символизирующих волны",
		"en": "The Mute it app logo is in the form of a drop turned upside down on its side. The blob is made up of semicircles symbolising waves",
	},
	"media-icon-messanger": {
		"ru": "Бумажный самолётик",
		"en": "Paper plan",
	},
	"url-join-chat": {
		"ru": "t.me/muteitapp",
		"en": "t.me/muteitapp",
	},
	"cta-go-to-chat-telegram": {
		"ru": "В чат проекта в Telegram",
		"en": "Go to the project chat in Telegram",
	},
	"text-muteit-helper": {
		"ru": "Mute it app – карманный помощник в туалете",
		"en": "Mute it app - a pocket-sized toilet assistant",
	},
	"cta-support-project": {
		"ru": "Поддержать проект через PayPal",
		"en": "Support the project via PayPal",
	},
	"url-support-project": {
		"ru": "https://www.paypal.com/paypalme/olianayda",
		"en": "https://www.paypal.com/paypalme/olianayda",
	},
	"media-icon-project": {
		"ru": "Логотип Пейпал",
		"en": "PayPal logo",
	},
	"text-section-what-is-next": {
		"ru": "Что будет:",
		"en": "What we plan to do",
	},
	"text-advices-text": {
		"ru": `В Mute It
		- Советы экспертов как  и не навредить здоровью в туалете
		- Счётчик сохранённой воды за время использования Mute it`,
		"en": `At Mute It
		- Expert advice on how not to harm your health in the toilet
		- Counter of water saved during use of Mute it`,
	},
	"text-tracking-text": {
		"ru": `В Mute it Health вы сможете
		- Отследить нарушения в кишечнике
		- Отмечать изменения стула
		- Следить за микрофлорой
		- Следить влиянием медикаментов
		- Легко делиться с доктором`,
		"en": `At Mute it Health you will be able to
		- Track bowel abnormalities
		- Notice changes in stool
		- Keep track of the microflora
		- Monitor the effects of your medication
		- Easily share with your doctor`,
	},
	"media-pro-picture": {
		"ru": "Маленькая иконка \"pro\"",
		"en": "Mini icon \"pro\"",
	},
	"text-H3-donating-text": {
		"ru": "Помочь все сделать быстрее:",
		"en": "Help us make everything faster:",
	},
	"media-money-picture": {
		"ru": "Деньги в руке",
		"en": "Money in a hand",
	},
	"url-money-text": {
		"ru": "https://paypal.com",
		"en": "https://paypal.com",
	},
	"media-volunteer-picture": {
		"ru": "Сердце в руке",
		"en": "Heart in a hand",
	},
	"url-volunteer-text": {
		"ru": "Руками в Telegram ",
		"en": "By hands  in a Telegram",
	},
	"text-download-text": {
		"ru": "Первая версия пока не доступна <br/> для скачивания",
		"en": "First version is not yet available for downloading",
	},
	"media-app-store-picture": {
		"ru": "Кнопка app store",
		"en": "App store button",
	},
	"url-app-store-picture": {
		"ru": "https://muteit.app/downloads",
		"en": "https://muteit.app/downloads",
	},
	"media-google-play-picture": {
		"ru": "Кнопка google play",
		"en": "Google play button",
	},
	"url-google-play-picture": {
		"ru": "https://muteit.app/downloads",
		"en": "https://muteit.app/downloads",
	},


	//Section-product presentation
	"text-H1-main-text-on-the-page": {
		"ru": "Воспользуйтесь шумом воды, чтобы посещать туалет без стеснения",
		"en": "Take advantage of the noise of the water to visit the toilet without embarrassment",
	},

	"text-description-of-H1": {
		"ru": "Создаём ощущение звуковой изоляции. В которой вы расслабитесь и сконцентрируетесь на главном",
		"en": "Create a sense of sonic isolation. In which you can relax and concentrate on what's important",
	},

	"cta-turn-off": {
		"ru": "Остановить",
		"en": "Turn off",
	},

	"cta-turn-on": {
		"ru": "Включить",
		"en": "Turn on",
	},

	"text-download-app": {
		"ru": "Скоро будет доступно в App Store & Google Play",
		"en": "Coming soon to the App Store & Google Play",
	},

	"url-download-appstore-icon": {
		"ru": "/downloads",
		"en": "",
	},

	"media-download-appstore-icon": {
		"ru": "Загрузите в App Store",
		"en": "Download from the App Store",
	},

	"url-download-GooglePlay-icon": {
		"ru": "/downloads",
		"en": "",
	},

	"media-download-GooglePlay-icon": {
		"ru": "Доступно в Google Play",
		"en": "Available on Google Play",
	},

	//section-why-cover-sounds
	"H2-what-includes-app-text": {
		"ru": "Что будет:",
		"en": "What we plan to do:",
	},

	"update-text": {
		"ru": "В Mute it",
		"en": "In Mute it",
	},	
	
	"updates-description-text": {
		"ru": "<li>Советы экспертов как не<br>навредить здоровью в туалете<li>Счётчик сохранённой воды за<br>время использования Mute it",
		"en": "<li>Expert advice on how not to<br>harm your health in the toilet<li>Counter of water saved during<br>use of Mute it",
	},

	"ecosystem-text": {
		"ru": "<h2>Mute it для<br>кишечника</h2>",
		"en": "<h2>Mute it for<br>the gut</h2>",
	},

	"ecosystem-description-text": {
		"ru": "<li>Health<li>Отследить нарушения в кишечнике<li>Отмечать изменения стула<li>Следить за микрофлорой<li>Следить влиянием медикаментов<li>Легко делиться с доктором",
		"en": "<li>Health<li>Track bowel abnormalities<li>Notice changes in stool<li>Keep track of the microflora<li>Monitor the effects of your medication<li>Easy share with your doctor",
	},

	"text-H2-main-feature": {
		"ru": "Замаскируй звуки шумом воды",
		"en": "Mask the sounds with the sound of water",
	},

	"media-balloon-picture": {
		"ru": "Воздушный шар с какашкой на верёвочке",
		"en": "Balloon with poop on a string",
	},

	"text-balloon-text": {
		"ru": "Посещать туалет в гостях можно спокойнее. Muteit замаскирует журчания и всплески.",
		"en": "Visiting the guest toilet can be more relaxing. Muteit disguises murmurs and splashes.",
	},

	"media-hand-wash-picture": {
		"ru": "Две руки одного человека моют руки под краном. Мыло пенится на них.",
		"en": "Two hands of the same person wash their hands under the tap. The soap foams on them.",
	},

	"text-hand-wash-text": {
		"ru": "Ваши друзья знают, что вы пришли к ним в туалет, но это не повод их стеснять. Пусть думают, что вы долго моете руки.",
		"en": "Your friends know that you have come to their toilet, but that is no reason to embarrass them. Let them think you are taking a long time to wash your hands.",
	},

	//section Downloads
	"text-H1-downloads": {
		"ru": "Спасибо, что заинтересовались Mute it app. Мы изо всех сил стараемся, чтобы приложение стало доступным скорее.",
		"en": "Thank you for being interested in Mute it app. We are trying our best to make the app available as soon as possible.",
	},

	"text-description-of-H1": {
		"ru": "Если вы хотите помочь нам с разработкой и выпустить приложение быстрее, мы всегда открыты к новым знакомствам и примем помощь",
		"en": "If you want to help us develop and release the app quicker, we are always opened to new acquaintances and will accept your help",
	},

	"text-join-team-text": {
		"ru": "С дорогой душой примем в команду, искренне желающих помочь",
		"en": "We will accept with arms open those, who are sincerely desiring to help us",
	},

	"cta-open-chat": {
		"ru": "В открытый чат в телеграме",
		"en": "In open telegram chat",
	},

	"url-open-chat": {
		"ru": "https://t.me/muteitapp",
		"en": "https://t.me/muteitapp",
	},

	"text-tell-about-problems-text": {
		"ru": "Не хотите в команду? Расскажите о своих проблемах нашей чуткой команде исследователей, чтобы мы улучшили приложение",
		"en": "Don't want to get into the team? Tell our team about your problems, so that we can make the app better",
	},

	"cta-message-teammate-1": {
		"ru": "Никите в Telegram",
		"en": "Nikita on telegram",
	},

	"url-message-teammate-1": {
		"ru": "https://t.me/nikita_khristenko",
		"en": "https://t.me/nikita_khristenko",
	},

	"cta-message-teammate-2": {
		"ru": "Оле на почту",
		"en": "Mail to Olia",
	},

	"url-message-teammate-2": {
		"ru": "mailto:olianayda@gmail.com",
		"en": "mailto:olianayda@gmail.com",
	},

	"text-H2-main-feature": {
		"ru": "Замаскируй звуки шумом воды",
		"en": "Mask the sounds with the sound of water",
	},

	"media-balloon-picture": {
		"ru": "Воздушный шар с какашкой на верёвочке",
		"en": "Balloon with poop on a string",
	},

	"text-balloon-text": {
		"ru": "Посещать туалет в гостях можно спокойнее. Muteit замаскирует журчания и всплески.",
		"en": "Visiting the guest toilet can be more relaxing. Muteit disguises murmurs and splashes.",
	},

	"media-hand-wash-picture": {
		"ru": "Две руки одного человека моют руки под краном. Мыло пенится на них",
		"en": "Two hands of the same person wash their hands under the tap. The soap foams on them",
	},

	"text-hand-wash-text": {
		"ru": "Ваши друзья знают, что вы пришли к ним в туалет, но это не повод их стеснять. Пусть думают, что вы долго моете руки.",
		"en": "Your friends know that you have come to their toilet, but that is no reason to embarrass them. Let them think you are taking a long time to wash your hands.",
	},

	"media-mom-picture": {
		"ru": "Нарисована женщина, которая что-то говорит",
		"en": "A woman is drawn saying something",
	},

	"text-mom-text": {
		"ru": "Мы знаем, как неловко бывает знакомиться с родителями вашей половинки, это не повод бояться посетить туалет",
		"en": "We know how awkward it can be to meet your significant other's parents. That's no reason to be afraid to visit the toilet",
	},

	"media-tap-picture": {
		"ru": "Кран с бегущей водой",
		"en": "Tap with running water",
	},

	"text-tap-text": {
		"ru": "Позаботимся о пресной воде. Зачем тратить настоящую воду, если вам нужен всего лишь шум?",
		"en": "Let's take care of the fresh water. Why waste real water if all you want is noise?",
	},

	"text-H2-second-feature": {
		"ru": "Успокойся",
		"en": "Relax",
	},

	"media-relax-picture": {
		"ru": "Человечек в кровати",
		"en": "Person in bed",
	},

	"text-relax-text": {
		"ru": "Включи воду в Mute it перед сном, чтобы расслабиться и отогнать мысли",
		"en": "Turn on the water in Mute it before you go to sleep, to relax and push your thoughts away",
	},

	"meia-happy-picture": {
		"ru": "Человек держит голову руками и улыбается",
		"en": "The man holds his head with his hands and smiles",
	},

	"text-happy-text": {
		"ru": "Звук поможет создать ощущение личной изоляции",
		"en": "Sound will help create a sense of personal isolation",
	},

	"media-mobility-picture": {
		"ru": "Смартфон. На экране изображение ленты из социальных сетей. Звуковые волны из динамиков смартфона. ",
		"en": "Smartphone. An image of a social media feed on the screen. Sound waves from the smartphone's speakers.",
	},

	"text-mobility-text": {
		"ru": "Шум воды не остановится, даже если вы свернёте приложение. Сёрфите в интернете и смотрите другие приложения, не беспокоясь о Muteit.",
		"en": "The water noise won't stop even if you minimise the app. Surf the internet and watch other apps without worrying about Muteit.",
	},

	"media-chilling-picture": {
		"ru": "Человек сидит в позе лотоса и улыбается",
		"en": "A man sits in a lotus pose and smiles",
	},

	"text-chilling-text": {
		"ru": "Используйте звук воды из крана вместо белого шума, чтобы сосредоточиться",
		"en": "Use the sound of water from the tap instead of white noise to focus",
	},

	//section-what-is-next
	"text-updates-text" :{
		"ru":"В Mute It",
		"en":"At Mute It"
	},

	"text-updates-description-text" :{
		"ru":"- Советы экспертов как покакать и не навредить здоровью в туалете. <br>- Счётчик сохранённой воды за время использования Mute it",
		"en":"- Expert advice on how not to harm your health in the toilet. <br>- Counter of water saved during use of Mute it"
	},
	"text-in-process-text" :{
		"ru":"В процессе…",
		"en":"In process…"
	},


	"text-ecosystem-text" :{
		"ru":"В Mute it Health вы сможете",
		"en":"At Mute it Health you will be able to"
	},

	"text-ecosystem-description-text" :{
		"ru":"- Отследить нарушения в кишечнике.<br> - Отмечать изменения стула. <br>- Следить за микрофлорой. - Следить влиянием медикаментов. <br>- Легко делиться с доктором",
		"en":"- Track bowel abnormalities.<br> - Notice changes in stool.<br> - Keep track of the microflora. - Monitor the effects of your medication. <br>- Easily share with your doctor"
	},

	//Footer
	"cta-olia-nayda": {
		"ru": "olianayda.com",
		"en": "",
	},

	"url-olia-nayda": {
		"ru": "https://olianayda.com",
		"en": "",
	},

	"text-noise-text": {
		"ru": "Шум воды из под крана",
		"en": "Tap water noise",
	},

	"text-abordable-picture": {
		"ru": "Доступно",
		"en": "Available at",
	},

	"media-download-appstore-icon": {
		"ru": "Загрузите в App Store",
		"en": "Download from the App Store",
	},

	"url-download-appstore-icon": {
		"ru": "/downloads",
		"en": "",
	},

	"media-download-GooglePlay-icon": {
		"ru": "Доступно в Google Play",
		"en": "Available on Google Play",
	},

	"url-download-GooglePlay-icon": {
		"ru": "/downloads",
		"en": "",
	},
	"text-made-by-text" :{
		"ru":"Проект создан при участии некоммерческого комьюнити «Свидетели Единорога», подробнее про них тут",
		"en":"The project was created with the participation of the non-profit community Unicorn Witnesses. Read more "
	},
	"text-go-to-author" :{
		"ru":"",
		"en":""
	},
		"url-go-to-author" :{
		"ru":"https://unicornwitnesses.com",
		"en":"https://unicornwitnesses.com"
	},

	"text-how-create-project-telegram" :{
		"ru":"Как создавался проект, открытый чат в Telegram",
		"en":"How the project was created, an open chat in Telegram"
	},
};
