// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const fromSpielberg = moviesArray.filter(movie => {
    // if (
    //   movie.genre.includes('Drama') &&
    //   movie.director === 'Steven Spielberg'
    // ) {
    //   return true;
    // }
    return (
      movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
    );
  });
  return fromSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumScores = moviesArray.reduce((accumulator, movie) => {
    if (typeof movie.score === 'number') {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  const avgScores = sumScores / moviesArray.length;
  return Math.round(avgScores * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const allDrama = moviesArray.filter(movie => {
    return movie.genre.includes('Drama');
  });
  if (allDrama.length === 0) {
    return 0;
  }

  const sumScores = allDrama.reduce((accumulator, movie) => {
    if (typeof movie.score === 'number') {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);
  const avgDramaScores = sumScores / allDrama.length;
  return Math.round(avgDramaScores * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesClone = moviesArray.slice();
  return moviesClone.sort((filmA, filmB) => {
    if (filmA.year < filmB.year) {
      return -1;
    } else if (filmA.year > filmB.year) {
      return 1;
    } else if (filmA.title < filmB.title) {
      return -1;
    } else if (filmA.title < filmB.title) {
      return 1;
    } else {
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesClone = moviesArray.slice();
  moviesClone.sort((filmA, filmB) => {
    if (filmA.title < filmB.title) {
      return -1;
    } else if (filmA.title > filmB.title) {
      return 1;
    } else {
      return 0;
    }
  });
  const firstClones = moviesClone.slice(0, 20);
  return firstClones.map(movie => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
