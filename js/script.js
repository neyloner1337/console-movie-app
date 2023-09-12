'use strict';
const numberOfFilms = +prompt('Сколько вы фильмов посмотели?', '');


const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (personalMoviesDB.count < 10) {
	alert('Просмотрено довольно мало фильмов');
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
	alert('Вы классический зритель');
} else if (personalMoviesDB.count >= 30) {
	alert('Вы киноман');
} else {
	alert('произошла ошибка');
}



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

console.log(personalMoviesDB);