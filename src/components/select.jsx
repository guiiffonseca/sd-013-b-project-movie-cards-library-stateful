import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Select extends Component {
  render() {
    const {
      name,
      nameId,
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
        data-testid={ labelId }
        htmlFor={ nameId }
      >
        { labelText }
        <select
          data-testid={ testId }
          id={ nameId }
          name={ name }
          value={ selectGenre }
          onChange={ onSelectedGenreChange }
        >
          { optionList.map((element) => (
            <option
              data-testid={ optionId }
              key={ element.value }
              value={ element.value }
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
  nameId: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  selectGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
  optionId: PropTypes.string.isRequired,
  optionList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
