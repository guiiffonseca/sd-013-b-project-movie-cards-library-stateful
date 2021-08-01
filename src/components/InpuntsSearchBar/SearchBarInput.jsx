import React from 'react';
import PropTypes from 'prop-types';

class SearchBarInput extends React.Component {
  render() {
    const { props } = this;
    const { name, value, onSearchTextChange } = props;
    return (
      <label data-testid="text-input-label" htmlFor="text-input">
        Inclui o texto:
        <input
          id="text-input"
          type="text"
          name={ name }
          value={ value }
          data-testid="text-input"
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

SearchBarInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBarInput;
