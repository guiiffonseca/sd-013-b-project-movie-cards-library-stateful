import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { title, handleOnChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ handleOnChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default Title;
