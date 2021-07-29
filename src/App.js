import React from 'react';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

import movies from './data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.addNewMovie = this.addNewMovie.bind(this);
    this.handleChangeAddMovie = this.handleChangeAddMovie.bind(this);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      rating: 0,
      imagePath: '',
      bookmarked: false,
      genre: 'action',
    };
  }

  handleChangeAddMovie(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addNewMovie() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    } = this.state;
    if (title !== '') {
      movies.push({
        title,
        subtitle,
        storyline,
        rating,
        imagePath,
        bookmarked,
        genre,
      });
      this.setState({
        title: '',
        subtitle: '',
        storyline: '',
        rating: 0,
        imagePath: '',
        bookmarked: false,
        genre: 'action',
      });
    }
  }

  render() {
    const {
      title,
      subtitle,
      storyline,
      rating,
      imagePath,
      bookmarked,
      genre,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary
          movies={ movies }
          addNewMovie={ this.addNewMovie }
          handleChangeAddMovie={ this.handleChangeAddMovie }
          title={ title }
          subtitle={ subtitle }
          storyline={ storyline }
          rating={ rating }
          imagePath={ imagePath }
          bookmarked={ bookmarked }
          genre={ genre }
        />
      </div>
    );
  }
}

export default App;
