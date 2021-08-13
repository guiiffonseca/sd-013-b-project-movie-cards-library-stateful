import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label
        htmlFor="add-movie-title"
        data-testid="title-input-label"
      >
        Título:
        <input
          id="add-movie-title"
          className="search-field"
          data-testid="title-input"
          type="text"
          name="title"
          value={ title }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddTitle;
