import React from 'react';
import PropTypes from 'prop-types';
import TitleTextInput from './TitleTextInput';
import SubitleTextInput from './SubtitleTextInput';
import ImageInput from './ImageInput';
import SinopseTextArea from './SinopseTextArea';
import NumberInput from './NumberInputForRating';
import SelectGender from './SelectGender';

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
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeOnTitle = this.handleChangeOnTitle.bind(this);
    this.handleChangeOnSubtitle = this.handleChangeOnSubtitle.bind(this);
    this.handleChangeOnImage = this.handleChangeOnImage.bind(this);
    this.handleChangeOnTextArea = this.handleChangeOnTextArea.bind(this);
    this.handleChangeOnRating = this.handleChangeOnRating.bind(this);
    this.handleChangeOnGenre = this.handleChangeOnGenre.bind(this);
  }

  handleClick = (event) => {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);

    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  handleChangeOnTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
    console.log(this);
  };

  handleChangeOnSubtitle = (event) => {
    this.setState({
      subtitle: event.target.value,
    });
    console.log(this);
  };

  handleChangeOnImage = (event) => {
    this.setState({
      imagePath: event.target.value,
    });
    console.log(this);
  };

  handleChangeOnTextArea = (event) => {
    this.setState({
      storyline: event.target.value,
    });
    console.log(this);
  };

  handleChangeOnRating = (event) => {
    this.setState({
      rating: event.target.value,
    });
    console.log(this);
  };

  handleChangeOnGenre = (event) => {
    this.setState({
      genre: event.target.value,
    });
    console.log(this);
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <TitleTextInput value={ title } onChange={ this.handleChangeOnTitle } />
          <SubitleTextInput value={ subtitle } onChange={ this.handleChangeOnSubtitle } />
          <ImageInput value={ imagePath } onChange={ this.handleChangeOnImage } />
          <SinopseTextArea value={ storyline } onChange={ this.handleChangeOnTextArea } />
          <NumberInput value={ rating } onChange={ this.handleChangeOnRating } />
          <SelectGender value={ genre } onChange={ this.handleChangeOnGenre } />
          <button
            data-testid="send-button"
            type="submit"
            onClick={ this.handleClick }
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
