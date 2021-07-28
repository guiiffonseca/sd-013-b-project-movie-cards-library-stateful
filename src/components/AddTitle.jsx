import React from 'react';
import PropTypes from 'prop-types';

export default class AddTitle extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          type="text"
          name="title"
          id="tile-input"
          value={ value }
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}
AddTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
