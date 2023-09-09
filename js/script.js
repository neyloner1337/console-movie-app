'use strict';
const numberOfFilms = +prompt('Сколько вы фильмов посмотели?', '');

const personalMoviesDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const answers0 = prompt('Один из последних просмотренных фильмов?', ''),
	answers1 = +prompt('Насколько оцените его?', ''),
	answers2 = prompt('Один из последних просмотренных фильмов?', ''),
	answers3 = +prompt('Насколько оцените его?', '');

personalMoviesDB.movies[answers0] = answers1;
personalMoviesDB.movies[answers2] = answers3;


console.log(personalMoviesDB);