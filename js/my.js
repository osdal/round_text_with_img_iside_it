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

	const element = document.querySelector('.logo_container');
	const width = element.clientWidth;
	const height = element.clientHeight;
	console.log(`Ширина: ${width}px, Высота: ${height}px`);

	let spanElements = name.getElementsByTagName('span');
	let fs = width * 0.12;

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



	let image = document.querySelector('.round-image-container');
	image.style.width = image.style.height = width * 0.8 + 'px';
	console.log(image.style.width);
	for (i = 0; i < spanElements.length; i++) {
		spanElements[i].style.fontSize = fs + 'px';
	}

	function increaseFont() {
		var textElement = document.getElementById("myText");
		var currentFontSize = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
		var newSize = parseFloat(currentFontSize) * 1.2; // Увеличение на 20%
		textElement.style.fontSize = newSize + "px";
	}

	function decreaseFont() {
		var textElement = document.getElementById("myText");
		var currentFontSize = window.getComputedStyle(textElement, null).getPropertyValue('font-size');
		var newSize = parseFloat(currentFontSize) * 0.8; // Уменьшение на 20%
		textElement.style.fontSize = newSize + "px";
	}





});