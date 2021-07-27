import React from 'react';
import PropTypes from 'prop-types';

class SelectLabeled extends React.Component {
  render() {
    const { value, handleData } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ value }
          onChange={ handleData }
        >
          <option value="action" data-testid="genre-option"> Ação </option>
          <option value="comedy" data-testid="genre-option"> Comédia </option>
          <option value="thriller" data-testid="genre-option"> Suspense </option>
        </select>
      </label>
    );
  }
}

SelectLabeled.propTypes = {
  value: PropTypes.string.isRequired,
  handleData: PropTypes.func.isRequired,
};

export default SelectLabeled;
