import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitleInput extends React.Component {
  render() {
    const { value: subtitle, onChange: handleChange } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieSubtitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSubtitleInput;
