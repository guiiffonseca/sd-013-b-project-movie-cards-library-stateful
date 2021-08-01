import React from 'react';
import PropTypes from 'prop-types';

export default class InputTitle extends React.Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          id="title"
          type="text"
          name="title"
          value={ title }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
