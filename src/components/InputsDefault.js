import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputsDefault extends Component {
  render() {
    const { searchText, textChange } = this.props;
    return (
      <label
        htmlFor="search-bar-form"
        data-testid="text-input-label"
      >
        Inclui o texto:
        <input
          name="search-bar-form"
          type="text"
          value={ searchText }
          onChange={ textChange }
          data-testid="text-input"
        />
      </label>
    );
  }
}

InputsDefault.propTypes = {
  searchText: PropTypes.string.isRequired,
  textChange: PropTypes.func.isRequired,
};

export default InputsDefault;
