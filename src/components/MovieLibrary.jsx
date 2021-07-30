import React, { useState } from 'react';
import SearchBar from './SearchBar';

function MovieLibrary(props) {
  const { movies } = props;
  const [searchText, setSearchText] = useState('');
  const [bookmarkedOnly, setbookmarkedOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  return (
    <SearchBar />
  );
}

export default MovieLibrary;
