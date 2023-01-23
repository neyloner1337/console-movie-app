/*jshint esversion: 6 */
"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert ('Вы киноман');
} else {
    alert('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов?', '');
    let b = +prompt('Насколько оцените его?', '');
    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
console.log(personalMovieDB);

