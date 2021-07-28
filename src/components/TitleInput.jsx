import React from 'react';
import PropTypes from 'prop-types';

export default class TitleInput extends React.Component {
  render() {
    const { title, handleChange } = this.props;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
