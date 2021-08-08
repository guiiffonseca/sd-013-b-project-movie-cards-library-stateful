import React from 'react';
import PropTypes from 'prop-types';

class AddMovieSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle-input"
          data-testid="subtitle-input"
          value={ value }
          onChange={ onChange }
          name="subtitle"
        />
      </label>
    );
  }
}

AddMovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieSubtitle;
