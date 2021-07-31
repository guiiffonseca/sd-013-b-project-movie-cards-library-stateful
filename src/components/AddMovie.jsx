import React from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import TextArea from './TextArea';
import InputNumber from './InputNumber';
import Select from './Select';
import Button from './Button';

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
  }

  handleInput = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleButton = () => {
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
        <InputText
          type="text"
          dataTestidLabel="title-input-label"
          dataTestidInput="title-input"
          name="title"
          value={ title }
          onChange={ this.handleInput }
          labelText="Título"
        />
        <InputText
          type="text"
          dataTestidLabel="subtitle-input-label"
          dataTestidInput="subtitle-input"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleInput }
          labelText="Subtítulo"
        />
        <InputText
          type="text"
          dataTestidLabel="image-input-label"
          dataTestidInput="image-input"
          name="image"
          value={ imagePath }
          onChange={ this.handleInput }
          labelText="Imagem"
        />
        <TextArea value={ storyline } onChange={ this.handleInput } />
        <InputNumber value={ rating } onChange={ this.handleInput } />
        <Select value={ genre } onChange={ this.handleInput } />
        <Button onClick={ this.handleButton } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
