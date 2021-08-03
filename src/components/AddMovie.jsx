import React from 'react';
import PropTypes from 'prop-types';
import AddSubtitle from './forms/AddSubtitle';
import Addtitle from './forms/AddTitle';
import AddImagePath from './forms/AddImagePath';
import StoryLine from './forms/storyline';
import AddRating from './forms/AddRating';
import AddGenre from './forms/AddGenre';
import AddButton from './forms/AddButton';

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
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    console.log(name, value);
  }

  handleClick(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
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
    return (
      <form data-testid="add-movie-form">
        <Addtitle title={ title } onChange={ this.handleChange } />
        <AddSubtitle subtitle={ subtitle } onChange={ this.handleChange } />
        <AddImagePath imagePath={ imagePath } onChange={ this.handleChange } />
        <StoryLine storyline={ storyline } onChange={ this.handleChange } />
        <AddRating rating={ rating } onChange={ this.handleChange } />
        <AddGenre genre={ genre } onChange={ this.handleChange } />
        <AddButton onClick={ this.handleClick } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
