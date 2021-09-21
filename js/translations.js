const getTranslations = async () => {
	const response = await fetch('https://muteit-web-multi-language-db.maximlitvinov.workers.dev');
	const translations = await response.json();
	return translations;
};
