import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import SubTitle from './SubTitle';
import ImagePath from './ImagePath';
import Storyline from './Storyline';
import FromRating from './FromRating';
import Select from './Select';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title valor={ title } handleChange={ this.handleChange } />
        <SubTitle valor={ subtitle } handleChange={ this.handleChange } />
        <ImagePath valor={ imagePath } handleChange={ this.handleChange } />
        <Storyline valor={ storyline } handleChange={ this.handleChange } />
        <FromRating valor={ rating } handleChange={ this.handleChange } />
        <Select valor={ genre } handleChange={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
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
