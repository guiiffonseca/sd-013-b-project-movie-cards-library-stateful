// implement Select component here
import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onValue } = this.props;

    // console.log(this);

    return (
      <label data-testid="select-input-label" htmlFor="idsel">
        Filtrar por gênero
        <select
          value={ value }
          onChange={ onValue }
          name="Select"
          id="idSel"
          data-testid="select-input"
        >

          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>

        </select>
      </label>

    );
  }
}

Select.propTypes = {

  value: PropTypes.string.isRequired,
  onValue: PropTypes.func.isRequired,

};

export default Select;
