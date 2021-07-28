import React, { Component } from 'react';

class SelectGenre extends Component {
  render() {
    const {label, id} = this.props;
    return (
      <label htmlFor={id} data-testid={`${id}-label`}>
        {`${label}`}
        <select>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
          <option value="op">op2</option>
        </select>
      </label>
    );
  }
}

export default SelectGenre;