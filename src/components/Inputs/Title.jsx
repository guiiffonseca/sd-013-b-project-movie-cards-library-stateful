import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { handle, inputValue, name } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="titleInput">
        Título
        <input
          data-testid="title-input"
          type="text"
          value={ inputValue || '' }
          onChange={ handle }
          name={ name }
        />
      </label>
    );
  }
}

Title.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Title;
