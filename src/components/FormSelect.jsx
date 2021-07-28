import React from 'react';
import PropTypes from 'prop-types';

const movieGenre = [
  { value: '', text: 'Todos' },
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

class FormSelect extends React.Component {
  render() {
    const {
      label,
      id,
      value,
      onChange,
    } = this.props;

    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        { label }
        <select
          name={ id }
          id={ id }
          data-testid={ id }
          value={ value }
          onChange={ onChange }
        >
          {movieGenre.map(({ value: genreValue, text }) => (
            <option key={ text } value={ genreValue } data-testid="select-option">
              {text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSelect;
