import React from 'react';
import PropTypes from 'prop-types';

class AddTextArea extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="storyline"
          value={ value }
          data-testid="storyline-input"
          name="storyline"
          onChange={ funcao }
        />
      </label>
    );
  }
}

AddTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default AddTextArea;
