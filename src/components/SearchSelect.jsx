import React from 'react';

class SearchSelect extends React.Component {
  render() {
    const { funcao } = this.props;
    const { value } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="select">
        Filtrar por gênero:
        <select
          id="select"
          value={ velue }
          onChange={ funcao }
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

export default SearchSelect;
