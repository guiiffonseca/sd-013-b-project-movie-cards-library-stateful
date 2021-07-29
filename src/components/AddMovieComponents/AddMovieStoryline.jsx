import React from 'react';
import PropTypes from 'prop-types';

class AddMovieStoryline extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <input
          type="text"
          name="storyline"
          value={ value }
          data-testid="storyline-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddMovieStoryline.propTypes = ({
  value: PropTypes.string,
  onChange: PropTypes.func,
}).isRequired;

export default AddMovieStoryline;
