'App' { Header, MovieLibrary(movie) }
  'Header'
  'MovieLibrary' { SearchBar(
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange), MovieList, AddMovie }
    'SearchBar'  
    'MovieList'
      'MovieCard'
        'Rating'
    'AddMovie'
