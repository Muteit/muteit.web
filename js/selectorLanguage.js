

const init = () => {
	let html = getTemplate(translations, 'en');
	const container = document.querySelector('#content');
	container.innerHTML = html;

	let select = document.querySelector('.change-lang');
	let options = Array.from(select.querySelectorAll('option'));

	const onSelectChange = () => {
		const selectedLanguage = options[select.selectedIndex].value
		window.location.hash = selectedLanguage;
		console.log(select);
		html = getTemplate(translations, selectedLanguage);
		container.innerHTML = html;
		select = document.querySelector('.change-lang');
		options = Array.from(select.querySelectorAll('option'));
		select.addEventListener('change', onSelectChange);
	}

	const changeSelectedOption = () => {
		const hash = window.location.hash.slice(1);
		const activeOption = options.find(option => option.value === hash);
		activeOption.selected = 'selected';
	}

	select.addEventListener('change', onSelectChange);
	window.addEventListener('hashchange', changeSelectedOption);
};

init();
