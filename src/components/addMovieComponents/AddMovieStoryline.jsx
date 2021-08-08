import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="textarea"
          id="storyline-input"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
          name="storyline"
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieStoryline;
