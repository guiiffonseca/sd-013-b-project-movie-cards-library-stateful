import React from 'react';

export default class textInput extends React.Component {
  render() {
    const { text, inputTestId, labelTestId } = this.props;
    return (
      <label data-testid={ labelTestId } htmlFor={ inputTestId }>
        { text }
        <select
          data-testid={ inputTestId }
          id={ inputTestId }
          name={ inputTestId }
          type="text"
        >
          <option data-testid={ optionTestId } value="">Todos</option>
          <option data-testid={ optionTestId } value="action">Ação</option>
          <option data-testid={ optionTestId } value="comedy">Comédia</option>
          <option data-testid={ optionTestId } value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}
