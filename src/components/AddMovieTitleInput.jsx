import React from 'react';
import PropTypes from 'prop-types';

class AddMovieTitleInput extends React.Component {
  render() {
    const { value: title, onChange: handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieTitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieTitleInput;
