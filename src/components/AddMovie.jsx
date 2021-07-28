// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

import FormTitle from './FormTitle';
import FormSubtitle from './FormSubtitle';
import FormImage from './FormImage';
import FormStoryline from './FormStoryline';
import FormRating from './FormRating';
import FormGenre from './FormGenre';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    const { state } = this;
    onClick(state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange } = this;
    const { handleClick } = this;
    return (
      <div>
        <form data-testid="add-movie-form">
          <FormTitle title={ title } callback={ handleChange } />
          <FormSubtitle subtitle={ subtitle } callback={ handleChange } />
          <FormImage imagePath={ imagePath } callback={ handleChange } />
          <FormStoryline storyline={ storyline } callback={ handleChange } />
          <FormRating rating={ rating } callback={ handleChange } />
          <FormGenre genre={ genre } callback={ handleChange } />
          <button
            type="submit"
            onClick={ handleClick }
            data-testid="send-button"
          >
            Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
