function Filter(movies, searchText, bookmarkedOnly, selectedGenre) {
  let filteredMovies = movies
    .filter(({ title, subtitle, storyline }) => (
      title.includes(searchText)
      || subtitle.includes(searchText)
      || storyline.includes(searchText)
    ));

  let mov = filteredMovies;

  function getBookmarked() {
    if (bookmarkedOnly === true) {
      filteredMovies = mov.filter(({ bookmarked }) => bookmarked === true);
      mov = filteredMovies;
    }
  }

  function getGenre() {
    if (selectedGenre !== '') {
      filteredMovies = mov.filter(({ genre }) => genre === selectedGenre);
    }
  }

  function filters() {
    getBookmarked();
    getGenre();
    return filteredMovies;
  }

  return filters();
}

export default Filter;
