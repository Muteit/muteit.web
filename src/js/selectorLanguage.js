import { initSounds } from './sounds';

export const init = () => {
	const textblocks = document.querySelectorAll('[data-textblock]')
	const select = document.querySelector('[data-js-select="change-lang"]');
	const options = Array.from(select.querySelectorAll('option'));
	let translations = {};
	
	async function getTranslations() {
			const endpoint = 'https://translations-system.maximlitvinov.workers.dev';
			const { result } = await fetch(endpoint).then((res) => res.json());
			translations = result;
			setLanguage('ru_ru');
	}

	const setLanguage = (lang) => {
		[...textblocks].forEach(textblock => {
			const tag = textblock.dataset.textblock;
			const t = (tag) => translations?.[tag]?.[lang];
			textblock.innerText = t(tag);
		})
	}

	const onSelectChange = () => {
		const selectedLanguage = options[select.selectedIndex].value
		window.location.hash = selectedLanguage;
		setLanguage(selectedLanguage);
		audio.pause();
		initSounds();
	}

	const changeSelectedOption = () => {
		const hash = window.location.hash.slice(1);
		const activeOption = options.find(option => option.value === hash);
		activeOption.selected = 'selected';
		onSelectChange();
	}
	getTranslations();
	select.addEventListener('change', onSelectChange);
	window.addEventListener('hashchange', changeSelectedOption);
};
