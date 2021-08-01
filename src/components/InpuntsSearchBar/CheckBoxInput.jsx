import React from 'react';
import PropTypes from 'prop-types';

class CheckBoxInput extends React.Component {
  render() {
    const { props } = this;
    const { name, value, onBookmarkedChange, bookmarkedOnly } = props;
    return (
      <label data-testid="checkbox-input-label" htmlFor="checkbox">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name={ name }
          value={ value }
          checked={ bookmarkedOnly }
          data-testid="checkbox-input"
          onChange={ onBookmarkedChange }
        />
      </label>
    );
  }
}

CheckBoxInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
};

export default CheckBoxInput;
