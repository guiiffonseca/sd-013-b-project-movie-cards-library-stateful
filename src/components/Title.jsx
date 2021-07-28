import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, onChange } = this.props;
    return (
      <label htmlFor="title-input-movie" data-testid="title-input-label">
        Título
        <input
          name="title"
          id="title-input-movie"
          type="text"
          value={ title }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
