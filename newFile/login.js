const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	// Отправляем запрос на сервер для проверки данных
	// ...

	// Если данные верны, перенаправляем пользователя на страницу поиска работы
	window.location.href = 'jobs.html';
});
const form = document.querySelector('form');
const jobTitle = document.querySelector('#job-title');
const location = document.querySelector('#location');
const jobListings = document.querySelector('.job-listings');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	// Отправляем запрос на сервер для получения списка вакансий
	// ...

	// Выводим результаты поиска на страницу
	// ...
});
