import React from 'react';

export default class SelectInput extends React.Component {
  render() {
    const { name, onChange, text, value } = this.props;
    return (
      <label data-testid={ `${name}-input-label` } htmlFor={ `${name}` }>
        {text}
        <select
          data-testid={ `${name}-input` }
          id={ `${name}` }
          name={ `${name}` }
          onChange={ onChange }
          value={ value }
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
