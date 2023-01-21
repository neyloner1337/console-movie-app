"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answer1 = prompt('Один из последних просмотренных фильмов?', ''),
    answer2 = +prompt('Насколько оцените его?', ''),
    answer3 = prompt('Один из последних просмотренных фильмов?', ''),
    answer4 = +prompt('Насколько оцените его?', '');

personalMovieDB.movies[answer1] = answer2;
personalMovieDB.movies[answer3] = answer4;
console.log(personalMovieDB);