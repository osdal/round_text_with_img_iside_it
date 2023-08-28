window.addEventListener("load", (event) => {

	// -----------------------------------------------
	let name = document.querySelector('.titleName');
	let nameContent = name.textContent;
	nameContent = nameContent + ' ';
	let nameLetters = nameContent.split('');
	let wrappedName = nameLetters.map((letter) => {
		return `<span>${letter}</span>`;
	});
	let finalName = wrappedName.join('');
	name.innerHTML = finalName;


	let spanElements = name.getElementsByTagName('span');


	for (i = 0; i < spanElements.length; i++) {
		spanElements[i].style.transform = "rotate(" + (i + 1) * 360 / spanElements.length + "deg)";
	}
	for (i = 0; i < spanElements.length; i++) {
		if (spanElements[i].innerHTML == ' ') {
			spanElements[i].classList.add('fa-regular', 'fa-star-of-david');
			spanElements[i].innerHTML = '';
			console.log(spanElements[i].textContent);
		}
	}

	const element = document.querySelector('.logo_container');
	const width = element.clientWidth;
	const height = element.clientHeight;
	console.log(`Ширина: ${width}px, Высота: ${height}px`);

	let image = document.querySelector('.round-image-container');
	image.style.width = image.style.height = width * 1.1 + 'px';
	console.log(image.style.width);







	// Получаем элемент, содержащий текст
	// const textContainer = document.getElementById('textContainer');

	// Получаем текст из элемента
	// const text = textContainer.textContent;

	// Разбиваем текст на отдельные буквы
	// const letters = text.split('');

	// Создаем новый HTML-код, оборачивая каждую букву в span
	// const wrappedText = letters.map(letter => `<span>${letter}</span>`).join('');

	// Вставляем обернутый текст обратно в элемент
	// textContainer.innerHTML = wrappedText;


});