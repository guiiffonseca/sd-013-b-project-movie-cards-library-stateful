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
    };
    this.searchTextChange = this.searchTextChange.bind(this);
  }

  searchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    const { searchText } = this.state;
    const { movies } = this.props;
    // const { title } = data;
    return (
      <section>
        <div className="SearchBar">
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ this.searchTextChange }
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
