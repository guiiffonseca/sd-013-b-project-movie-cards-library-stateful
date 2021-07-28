import React from 'react';
import PropTypes from 'prop-types';
import TextArea from './TextArea';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.OnChange = this.OnChange.bind(this);

    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }

  OnChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value });
  }

  render() {
    const { OnClick } = this.props;
    const { OnChange } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    return (
      <form data-testid="title-input-label">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            name="title"
            value={ title }
            onChange={ OnChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            data-testid="subtitle-input"
            name="subtitle"
            value={ subtitle }
            onChange={ OnChange }
          />
        </label>
        <label htmlFor="image" data-testid="image-input-label">
          Imagem
          <input
            data-testid="image-input"
            name="image"
            value={ imagePath }
            onChange={ OnChange }
          />
          <TextArea />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  subtile: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
  OnChange: PropTypes.func,
  onClick: PropTypes.func,
}.isRequired;

export default AddMovie;
