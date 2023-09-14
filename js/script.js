'use strict';
let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько вы фильмов посмотели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько вы фильмов посмотели?', '');
	}
}

start();

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function detectPersonLevel() {
	if (personalMoviesDB.count < 10) {
		alert('Просмотрено довольно мало фильмов');
	} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
		alert('Вы классический зритель');
	} else if (personalMoviesDB.count >= 30) {
		alert('Вы киноман');
	} else {
		alert('произошла ошибка');
	}

}

detectPersonLevel();

function remeberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Последний просмотренный фильм?', ''),
			b = +prompt('насколько оцените его', '');
		if (a != null && b != null && a != undefined && b != undefined && a != '' && b != '' && a != ' ' && b != ' ' && a.length < 50) {
			personalMoviesDB.movies[a] = b;
		} else {
			alert('ошибка');
			i--;
		}
	}
}

remeberMyFilms();


function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMoviesDB);
	}
}

showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
writeYourGenres();