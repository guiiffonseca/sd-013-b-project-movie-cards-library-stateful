import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, select, option, change, selectValue } = this.props;

    const { labelId, txt } = label;

    const { selectId, id } = select;

    const { options, optionId } = option;

    return (
      <label
        data-testid={ labelId }
        htmlFor={ id }
      >

        { txt }
        <select
          data-testid={ selectId }
          id={ id }
          value={ selectValue }
          onChange={ change }
        >
          {options.map((value, index) => (
            <option
              key={ index }
              data-testid={ optionId }
              value={ value.value }
            >
              { value.txt }
            </option>
          ))}
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.objectOf(PropTypes.string).isRequired,
  select: PropTypes.objectOf(PropTypes.string).isRequired,
  option: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.object),
    optionId: PropTypes.string,
  }).isRequired,
  change: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
};

export default Select;

// MODELO DE PROPS

// const label = {
//   labelId: 'genre-input-label',
//   txt: 'Gênero',
// };

// const select = {
//   selectId: 'genre-input',
//   id: 'genre',
// };

// const option = {
//   optionId: 'genre-option',
//   options: [
//     { value: 'action', txt: 'Ação' },
//     { value: 'comedy', txt: 'Comédia' },
//     { value: 'thriller', txt: 'Suspense' }],
// };

// <Select
//   label={ label }
//   select={ select }
//   option={ option }
//   change={ change }
//   selectValue={ value }
// />
