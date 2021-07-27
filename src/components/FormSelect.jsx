import React from 'react';
import PropTypes from 'prop-types';

const movieGenres = [
  { value: '', text: 'Todos' },
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class FormSelect extends React.Component {
  render() {
    const {
      name,
      labelText,
      labelTestId,
      selectId,
      selectTestId,
      selectValue,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ selectId } data-testid={ labelTestId }>
        { labelText }
        <select
          name={ name }
          id={ selectId }
          data-testid={ selectTestId }
          value={ selectValue }
          onChange={ onChange }
        >
          {movieGenres.map(({ value, text }) => (
            <option key={ text } value={ value } data-testid="select-option">
              {text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  labelTestId: PropTypes.string.isRequired,
  selectId: PropTypes.string.isRequired,
  selectTestId: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSelect;
