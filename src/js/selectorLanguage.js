import { getTemplate } from './templates';
import { translations } from './translations';
import { initSounds } from './sounds';

export const init = () => {
	let html = getTemplate(translations, 'en');
	//const container = document.querySelector('#content');
	//container.innerHTML = html;

	const select = document.querySelector('[data-js-select="change-lang"]');
	const options = Array.from(select.querySelectorAll('option'));

	const onSelectChange = () => {
		const selectedLanguage = options[select.selectedIndex].value
		window.location.hash = selectedLanguage;
		html = getTemplate(translations, selectedLanguage);
		container.innerHTML = html;
		audio.pause();
		initSounds();
	}

	const changeSelectedOption = () => {
		const hash = window.location.hash.slice(1);
		const activeOption = options.find(option => option.value === hash);
		activeOption.selected = 'selected';
		onSelectChange();
	}

	select.addEventListener('change', onSelectChange);
	window.addEventListener('hashchange', changeSelectedOption);
};
