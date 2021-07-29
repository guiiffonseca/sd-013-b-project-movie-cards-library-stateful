import React from 'react';

export default class CreatSelect extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <select
        name="genre"
        id="genre"
        data-testid="genre-input"
        value={ value }
        onChange={ onChange }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }
}
