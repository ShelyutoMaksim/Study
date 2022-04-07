const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренный фильмов', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних просмотренный фильмов', ''),
      d = prompt('Насколько оцените его?', '');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB)