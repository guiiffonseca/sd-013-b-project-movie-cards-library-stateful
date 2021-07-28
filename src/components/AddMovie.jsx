// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';
import MakeTitle from './MakeTitle';
import MakeSubtitle from './MakeSubtitle';
import MakeImagem from './MakeImage';
import MakeSinopse from './MakeSinopse';
import MakeRating from './MakeRating';
import MakeSelect from './MakeSelect';

export default class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const {
      title,
      subtitle,
      imagePath,
      storyLine,
      rating,
      genre,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <MakeTitle title={ title } handleChange={ this.handleChange } />
        <MakeSubtitle subtitle={ subtitle } handleChange={ this.handleChange } />
        <MakeImagem imagePath={ imagePath } handleChange={ this.handleChange } />
        <MakeSinopse storyLine={ storyLine } handleChange={ this.handleChange } />
        <MakeRating rating={ rating } handleChange={ this.handleChange } />
        <MakeSelect genre={ genre } handleChange={ this.handleChange } />

        <button
          type="button"
          data-testid="send-button"
          value={ this.state }
          onClick={ this.handleButton }
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
