// import React, { Component } from 'react';

// import MovieList from './MovieList';
// import SearchBar from './SearchBar';
// import AddMovie from './AddMovie';

// class MovieLibrary extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       searchText: '',
//     };

//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//     console.log(event.target.value);
//     this.setState({ searchText: event.target.value });
//   }

//   render() {
//     const { searchText } = this.state;
//     return (
//       <div>
//         <h2> My awesome movie library </h2>
//         <SearchBar searchText={ this.handleChange } />
//         <MovieList movies={ this.state.movies } />
//         <AddMovie />
//       </div>
//     );
//   }
// }

// export default MovieLibrary;
