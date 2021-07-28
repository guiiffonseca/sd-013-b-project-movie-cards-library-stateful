import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {
          title: 'An awesome title',
          subtitle: 'Movie Subtitle 1',
          storyline: 'Movie Storyline 1',
          rating: 4.5,
          imagePath: 'images/movie_1',
          bookmarked: true,
          genre: 'action',
        },
        {
          title: 'Movie Title 2',
          subtitle: 'Movie Subtitle 2',
          storyline: 'Movie Storyline 2',
          rating: 4.5,
          imagePath: 'images/movie_2',
          bookmarked: true,
          genre: 'comedy',
        },
        {
          title: 'Movie Title',
          subtitle: 'Movie Subtitle 3',
          storyline: 'Movie Storyline 3',
          rating: 4.5,
          imagePath: 'images/movie_3',
          bookmarked: true,
          genre: 'thriller',
        },
      ],
    };
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies } />
      </div>
    );
  }
}
