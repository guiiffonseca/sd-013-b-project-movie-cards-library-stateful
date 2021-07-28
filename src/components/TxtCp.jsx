import React from 'react';
import PropTypes from 'prop-types';

export default class TxtCp extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="textarea-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="textarea-input"
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TxtCp.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
