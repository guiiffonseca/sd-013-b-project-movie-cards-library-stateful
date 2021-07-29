// implement AddMovie component here
import React from 'react';
import Title from './AddMovieComponentes/Title';
import Subtitle from './AddMovieComponentes/Subtitulo';
import ImagePath from './AddMovieComponentes/ImagePath';
import Storyline from './AddMovieComponentes/Storyline';
import Rating from './AddMovieComponentes/Rating';
import Genre from './AddMovieComponentes/Genre';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleOnClick = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title state={ title } evento={ this.handleOnClick } />
        <Subtitle state={ subtitle } evento={ this.handleOnClick } />
        <ImagePath state={ imagePath } evento={ this.handleOnClick } />
        <Storyline state={ storyline } evento={ this.handleOnClick } />
        <Rating state={ rating } evento={ this.handleOnClick } />
        <Genre state={ genre } evento={ this.handleOnClick } />
      </form>
    );
  }
}

export default AddMovie;
