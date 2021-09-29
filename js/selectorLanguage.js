const select = document.querySelector('.change-lang');
const options = Array.from(select.querySelectorAll('option'));

select.addEventListener('change', function() {
	const selectedLanguage = options[select.selectedIndex].value
	window.location.hash = selectedLanguage;
  console.log('change');
	renderHTML(translations, selectedLanguage);
});

function changeSelectedOption() {
	const hash = window.location.hash.slice(1);
	const activeOption = options.find(option => option.value === hash);

	activeOption.selected = 'selected';
}

window.addEventListener('hashchange', changeSelectedOption);

changeSelectedOption();
