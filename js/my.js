window.addEventListener("load", (event) => {
	// //присвоение переменной элемента текст
	// const text = document.querySelector('.text');
	// //разбивка текста на буквы
	// text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

	// let element = document.querySelectorAll('span');
	// // console.log(element);
	// for (let i = 0; i < element.length; i++) {
	// 	element[i].style.transform = "rotate(" + i * 18 + "deg)";
	// }

	// let phrase = document.querySelector('#simple_arc');

	// // Получаем текущий текст из блока
	// var currentText = phrase.textContent;

	// // Добавляем . в конец текста
	// var newText = currentText + ".";

	// // Устанавливаем новый текст в блок
	// // phrase.textContent = newText;

	// new CircleType(phrase);

	// // Получаем все <span> элементы внутри блока
	// var spanElements = phrase.getElementsByTagName("span");

	// console.log(spanElements);

	// // Проходимся по всем <span> элементам и заменяем текст пробела на иконку звездочки
	// for (var i = 0; i < spanElements.length; i++) {
	// 	if (spanElements[i].textContent === ".") {
	// 		spanElements[i].innerHTML = "&#9733;"; // Звездочка в виде HTML-кода
	// 	}
	// }
	// for (var i = 0; i < spanElements.length; i++) {
	// 	if (spanElements[i].textContent === "&nbsp;") {
	// 		spanElements[i].innerHTML = "&#9733;"; // Звездочка в виде HTML-кода
	// 	}
	// }

	// Создаем новый <span> элемент с текстом пробела
	// var spaceSpan = document.createElement("span");
	// spaceSpan.textContent = " ";

	// Добавляем новый <span> элемент с пробелом в конец блока
	// phrase.appendChild(spaceSpan);


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