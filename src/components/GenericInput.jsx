import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { searchText, onSearchTextChange, type, text, name, dataId, dataLabel } = this.props;
    return (
      <label htmlFor={ name } data-testid={ dataLabel }>
        {text}
        <input
          type={ type }
          name={ name }
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid={ dataId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,
  dataLabel: PropTypes.string.isRequired,
};
