import React from 'react';
import PropTypes from 'prop-types';

class CompData extends React.Component {
  render() {
    const { imagePath, storyline, rating, handleChange } = this.props;
    return (
      <div>
        <label htmlFor="imagePath" data-testid="image-input-label">
          Imagem
          <input
            id="imagePath"
            name="imagePath"
            data-testid="image-input"
            type="text"
            value={ imagePath }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <input
            id="storyline"
            name="storyline"
            data-testid="storyline-input"
            type="textarea"
            value={ storyline }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            name="rating"
            data-testid="rating-input"
            type="number"
            value={ parseFloat(rating) }
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

CompData.propTypes = {
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CompData;
