import React from 'react';

export default class SelectInput extends React.Component {
  render() {
    const { onInputChange, text, type } = this.props;
    return (
      <label data-testid={ `${type}-input-label` } htmlFor={ `${type}` }>
        {text}
        <select
          data-testid={ `${type}-input` }
          id={ `${type}` }
          name={ `${type}` }
          onChange={ onInputChange }
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
