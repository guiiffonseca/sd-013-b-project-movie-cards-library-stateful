import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      favBooks: false,
    };
    this.searchTextChange = this.searchTextChange.bind(this);
    this.handleBookFavCheck = this.handleBookFavCheck.bind(this);
  }

  handleBookFavCheck() {
    const { favBooks } = this.state;
    this.setState({
      favBooks: !favBooks,
    });
  }

  searchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { searchText, favBooks } = this.state;
    const { movies } = this.props;
    // const { title } = data;
    return (
      <section>
        <div className="SearchBar">
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.searchTextChange }
            bookmarkedOnly={ favBooks }
            onBookmarkedChange={ this.handleBookFavCheck }
          />
        </div>
        <div className="movieList">
          <MovieList movies={ movies } />
        </div>
        {/* <AddMovie onChange={ title } /> */}
      </section>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
