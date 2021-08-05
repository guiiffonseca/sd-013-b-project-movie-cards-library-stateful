import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
import ImagePath from './ImagePath';
import StoryLine from './StoryLine';
import InputRating from './InputRating';
import Genre from './Genre';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    // https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  addMovie(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form" className="label-add">
        <Title state={ title } callback={ this.handleChange } />
        <Subtitle state={ subtitle } callback={ this.handleChange } />
        <ImagePath state={ imagePath } callback={ this.handleChange } />
        <StoryLine state={ storyLine } callback={ this.handleChange } />
        <InputRating state={ rating } callback={ this.handleChange } />
        <Genre state={ genre } callback={ this.handleChange } />
        <button
          onClick={ this.addMovie }
          data-testid="send-button"
          type="submit"
          className="button"
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
