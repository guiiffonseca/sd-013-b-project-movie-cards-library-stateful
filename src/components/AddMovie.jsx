// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import InputLabeled from './InputLabeled';
import InputLabeledImage from './InputLabeledImage';
import TextAreaLabeled from './TextAreaLabeled';
import InputLabeledRating from './InputLabeledRating';
import SelectLabeled from './SelectLabeled';

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
  }

  handleData = (event) => {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;

    this.setState(({
      [name]: value,
    }));
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputLabeled
          name="title"
          value={ title }
          handleData={ this.handleData }
          text="Título"
        />
        <InputLabeled
          name="subtitle"
          value={ subtitle }
          handleData={ this.handleData }
          text="Subtítulo"
        />
        <InputLabeledImage handleData={ this.handleData } value={ imagePath } />
        <TextAreaLabeled value={ storyline } handleData={ this.handleData } />
        <InputLabeledRating value={ rating } handleData={ this.handleData } />
        <SelectLabeled value={ genre } handleData={ this.handleData } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  // onClick: PropTypes.func.isRequired,
};

export default AddMovie;
