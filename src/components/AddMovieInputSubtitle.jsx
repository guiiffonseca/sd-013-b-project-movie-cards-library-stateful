import React from 'react';
import PropTypes from 'prop-types';

class AddMovieInputSubtitle extends React.Component {
  render() {
    const { subtitle, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitle"
          value={ subtitle }
          onChange={ handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

AddMovieInputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieInputSubtitle;
