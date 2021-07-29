import React from 'react';
import PropTypes from 'prop-types';

class SelectLabel extends React.Component {
  render() {
    const { prop, onChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          value={ prop }
          name="genre"
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option
            data-testid="genre-option"
            value="action"
            // defaultChecked
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SelectLabel.propTypes = {
  prop: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectLabel;
