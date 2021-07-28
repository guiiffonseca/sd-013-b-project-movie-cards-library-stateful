// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

// import MovieList from './MovieList';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    const { movies } = this.props;
    return (
      <div>
        <p>Teste</p>
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MovieLibrary;

//       <div>
//         <h2> My awesome movie library </h2>
//         <SearchBar />
//         <MovieList movies={this.props.movies} />
//         <AddMovie />
//       </div>
