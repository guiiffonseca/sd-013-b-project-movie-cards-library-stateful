import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange({ target }) {
    // Valeu Alberto! https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/formularios-no-react/537fc0f4-1be1-4cd8-8333-9432fa722672/conteudos/815da631-cbdb-4637-b7fb-17e29240a8d1/event-handlers-genericos/20a033ed-ccfc-4e65-b6cb-53abf58039bb?use_case=side_bar
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
    if (bookmarkedOnly === true) {
      this.setState({
        movies: movies.filter((movie) => movie.bookmarkedOnly === true),
      });
    } else if (selectedGenre !== '') {
      this.setState({
        movies: movies.filter((movie) => movie.genre === selectedGenre),
      });
    } else if (searchText !== '') {
      this.setState({
        movies: movies.filter((element) => element.title.includes(searchText)),
        // || movie.subtitle.includes(searchText) || movie.storyline.includes(searchText)),
      });
    }
  }

  onClick(state) {
    // const { movies } = this.state
    // const test = this.state
    this.setState(
      (estado) => ({ movies: estado.movies.concat(state) }),
    );
  }
  // Como texto do readme está confuso olhei o PR :https://github.com/tryber/sd-013-b-project-movie-cards-library-stateful/pull/109/files para entender o que fazer;
  // Toda logica desenvolvida foi feita por mim!

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ this.searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ this.bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ this.selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
