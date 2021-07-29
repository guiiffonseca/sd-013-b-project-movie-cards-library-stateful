import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="img"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieImagePath.propTypes = ({
  value: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;

export default AddMovieImagePath;
