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
		"en": "Помочь все сделать быстрее:",
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
		"ru": "Руками",
		"en": "By hands",
	},
	"text-download-text": {
		"ru": "Первая версия пока не доступна для скачивания",
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
	//Footer
	"cta-olia-nayda":{
		"ru":"olianayda.com",
		"en":"",
	},

	"url-olia-nayda":{
		"ru":"https://olianayda.com",
		"en":"",
	},

	"text-noise-text":{
		"ru":"Шум воды из под крана",
		"en":"Tap water noise",
	},

	"text-abordable-picture":{
		"ru":"Доступно",
		"en":"Available at",
	},

	"media-download-appstore-icon":{
		"ru":"Загрузите в App Store",
		"en":"Download from the App Store",
	},

	"url-download-appstore-icon":{
		"ru":"/downloads",
		"en":"",
	},

	"media-download-GooglePlay-icon":{
		"ru":"Доступно в Google Play",
		"en":"Available on Google Play",
	},

	"url-download-GooglePlay-icon":{
		"ru":"/downloads",
		"en":"",
	},

	//Section-product presentation
	"text-H1-main-text-on-the-page":{
		"ru":"Воспользуйтесь шумом воды, чтобы посещать туалет без стеснения",
		"en":"Take advantage of the noise of the water to visit the toilet without embarrassment",
	},

	"text-description-of-H1":{
		"ru":"Создаём ощущение звуковой изоляции. В которой вы расслабитесь и сконцентрируетесь на главном",
		"en":"Create a sense of sonic isolation. In which you can relax and concentrate on what's important",
	},

	"cta-turn-off":{
		"ru":"Остановить",
		"en":"Turn off",
	},

	"cta-turn-on":{
		"ru":"Включить",
		"en":"Turn on",
	},

	"text-download-app":{
		"ru":"Скоро будет доступно в App Store & Google Play",
		"en":"Coming soon to the App Store & Google Play",
	},

	"url-download-appstore-icon":{
		"ru":"/downloads",
		"en":"",
	},

	"media-download-appstore-icon":{
		"ru":"Загрузите в App Store",
		"en":"Download from the App Store",
	},

	"url-download-GooglePlay-icon":{
		"ru":"/downloads",
		"en":"",
	},

	"media-download-GooglePlay-icon":{
		"ru":"Доступно в Google Play",
		"en":"Available on Google Play",
	},

	//section-why-cover-sounds

	"text-H2-main-feature":{
		"ru":"Замаскируй звуки шумом воды",
		"en":"Mask the sounds with the sound of water",
	},

	"media-balloon-picture":{
		"ru":"Воздушный шар с какашкой на верёвочке",
		"en":"Balloon with poop on a string",
	},

	"text-balloon-text":{
		"ru":"Посещать туалет в гостях можно спокойнее. Muteit замаскирует журчания и всплески.",
		"en":"Visiting the guest toilet can be more relaxing. Muteit disguises murmurs and splashes.",
	},

	"media-hand-wash-picture":{
		"ru":"Две руки одного человека моют руки под краном. Мыло пенится на них.",
		"en":"Two hands of the same person wash their hands under the tap. The soap foams on them.",
	},

	"text-hand-wash-text":{
		"ru":"Ваши друзья знают, что вы пришли к ним в туалет, но это не повод их стеснять. Пусть думают, что вы долго моете руки.",
		"en":"Your friends know that you have come to their toilet, but that is no reason to embarrass them. Let them think you are taking a long time to wash your hands.",
	},

	//section Downloads 
	"text-H1-downloads":{
		"ru":"Спасибо, что заинтересовались Mute it app. Мы изо всех сил стараемся, чтобы приложение стало доступным скорее.",
		"en":"Thank you for being interested in Mute it app. We are trying our best to make the app available as soon as possible.",
	},

	"text-description-of-H1":{
		"ru":"Если вы хотите помочь нам с разработкой и выпустить приложение быстрее, мы всегда открыты к новым знакомствам и примем помощь",
		"en":"If you want to help us develop and release the app quicker, we are always opened to new acquaintances and will accept your help",
	},
	
	"text-join-team-text":{
		"ru":"С дорогой душой примем в команду, искренне желающих помочь",
		"en":"We will accept with arms open those, who are sincerely desiring to help us",
	},

	"cta-open-chat":{
		"ru":"В открытый чат в телеграме",
		"en":"In open telegram chat",
	},

	"url-open-chat":{
		"ru":"https://t.me/muteitapp",
		"en":"https://t.me/muteitapp",
	},

	"text-tell-about-problems-text":{
		"ru":"Не хотите в команду? Расскажите о своих проблемах нашей чуткой команде исследователей, чтобы мы улучшили приложение",
		"en":"Don't want to get into the team? Tell our team about your problems, so that we can make the app better",
	},

	"cta-message-teammate-1":{
		"ru":"Никите в Telegram",
		"en":"Nikita on telegram",
	},

	"url-message-teammate-1":{
		"ru":"https://t.me/nikita_khristenko",
		"en":"https://t.me/nikita_khristenko",
	},

	"cta-message-teammate-2":{
		"ru":"Оле на почту",
		"en":"Mail to Olia",
	},

	"url-message-teammate-2":{
		"ru":"mailto:olianayda@gmail.com",
		"en":"mailto:olianayda@gmail.com",
	},
};


const translationsMaxim = {
	//Footer
	"cta-olia-nayda":{
		"ru":"olianayda.com",
		"en":"",
	},

	"url-olia-nayda":{
		"ru":"https://olianayda.com",
		"en":"",
	},

	"text-noise-text":{
		"ru":"Шум воды из под крана",
		"en":"Tap water noise",
	},

	"text-abordable-picture":{
		"ru":"Доступно",
		"en":"Available at",
	},

	"media-download-appstore-icon":{
		"ru":"Загрузите в App Store",
		"en":"Download from the App Store",
	},

	"url-download-appstore-icon":{
		"ru":"/downloads",
		"en":"",
	},

	"media-download-GooglePlay-icon":{
		"ru":"Доступно в Google Play",
		"en":"Available on Google Play",
	},

	"url-download-GooglePlay-icon":{
		"ru":"/downloads",
		"en":"",
	},

	//Section-product presentation
	"text-H1-main-text-on-the-page":{
		"ru":"Воспользуйтесь шумом воды, чтобы посещать туалет без стеснения",
		"en":"Take advantage of the noise of the water to visit the toilet without embarrassment",
	},

	"text-description-of-H1":{
		"ru":"Создаём ощущение звуковой изоляции. В которой вы расслабитесь и сконцентрируетесь на главном",
		"en":"Create a sense of sonic isolation. In which you can relax and concentrate on what's important",
	},

	"cta-turn-off":{
		"ru":"Остановить",
		"en":"Turn off",
	},

	"cta-turn-on":{
		"ru":"Включить",
		"en":"Turn on",
	},

	"text-download-app":{
		"ru":"Скоро будет доступно в App Store & Google Play",
		"en":"Coming soon to the App Store & Google Play",
	},

	"url-download-appstore-icon":{
		"ru":"/downloads",
		"en":"",
	},

	"media-download-appstore-icon":{
		"ru":"Загрузите в App Store",
		"en":"Download from the App Store",
	},

	"url-download-GooglePlay-icon":{
		"ru":"/downloads",
		"en":"",
	},

	"media-download-GooglePlay-icon":{
		"ru":"Доступно в Google Play",
		"en":"Available on Google Play",
	},

	//section-why-cover-sounds

	"text-H2-main-feature":{
		"ru":"Замаскируй звуки шумом воды",
		"en":"Mask the sounds with the sound of water",
	},

	"media-balloon-picture":{
		"ru":"Воздушный шар с какашкой на верёвочке",
		"en":"Balloon with poop on a string",
	},

	"text-balloon-text":{
		"ru":"Посещать туалет в гостях можно спокойнее. Muteit замаскирует журчания и всплески.",
		"en":"Visiting the guest toilet can be more relaxing. Muteit disguises murmurs and splashes.",
	},

	"media-hand-wash-picture":{
		"ru":"Две руки одного человека моют руки под краном. Мыло пенится на них.",
		"en":"Two hands of the same person wash their hands under the tap. The soap foams on them.",
	},

	"text-hand-wash-text":{
		"ru":"Ваши друзья знают, что вы пришли к ним в туалет, но это не повод их стеснять. Пусть думают, что вы долго моете руки.",
		"en":"Your friends know that you have come to their toilet, but that is no reason to embarrass them. Let them think you are taking a long time to wash your hands.",
	},

	//section Downloads 
	"text-H1-downloads":{
		"ru":"Спасибо, что заинтересовались Mute it app. Мы изо всех сил стараемся, чтобы приложение стало доступным скорее.",
		"en":"Thank you for being interested in Mute it app. We are trying our best to make the app available as soon as possible.",
	},

	"text-description-of-H1":{
		"ru":"Если вы хотите помочь нам с разработкой и выпустить приложение быстрее, мы всегда открыты к новым знакомствам и примем помощь",
		"en":"If you want to help us develop and release the app quicker, we are always opened to new acquaintances and will accept your help",
	},
	
	"text-join-team-text":{
		"ru":"С дорогой душой примем в команду, искренне желающих помочь",
		"en":"We will accept with arms open those, who are sincerely desiring to help us",
	},

	"cta-open-chat":{
		"ru":"В открытый чат в телеграме",
		"en":"In open telegram chat",
	},

	"url-open-chat":{
		"ru":"https://t.me/muteitapp",
		"en":"https://t.me/muteitapp",
	},

	"text-tell-about-problems-text":{
		"ru":"Не хотите в команду? Расскажите о своих проблемах нашей чуткой команде исследователей, чтобы мы улучшили приложение",
		"en":"Don't want to get into the team? Tell our team about your problems, so that we can make the app better",
	},

	"cta-message-teammate-1":{
		"ru":"Никите в Telegram",
		"en":"Nikita on telegram",
	},

	"url-message-teammate-1":{
		"ru":"https://t.me/nikita_khristenko",
		"en":"https://t.me/nikita_khristenko",
	},

	"cta-message-teammate-2":{
		"ru":"Оле на почту",
		"en":"Mail to Olia",
	},

	"url-message-teammate-2":{
		"ru":"mailto:olianayda@gmail.com",
		"en":"mailto:olianayda@gmail.com",
	},

	
	
	
	
	

}