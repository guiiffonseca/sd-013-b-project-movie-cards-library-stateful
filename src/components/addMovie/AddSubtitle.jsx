import React from 'react';
import PropTypes from 'prop-types';

class AddSubTitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label
        htmlFor="add-movie-subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo:
        <input
          id="add-movie-subtitle"
          className="search-field"
          data-testid="subtitle-input"
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddSubTitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddSubTitle;
