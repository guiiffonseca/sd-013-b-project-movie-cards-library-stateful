import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const {
      name,
      testId,
      labelText,
      selectGenre,
      onSelectedGenreChange,
      optionList,
      optionId,
    } = this.props;
    const labelId = `${testId}-label`;
    return (
      <label
        htmlFor={ name }
        data-testid={ labelId }
      >
        { labelText }
        <select
          id={ name }
          data-testid={ testId }
          value={ selectGenre }
          onChange={ onSelectedGenreChange }
        >
          { optionList.map((element) => (
            <option
              key={ element.value }
              value={ element.value }
              data-testid={ optionId }
            >
              { element.content }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  selectGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  optionId: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
