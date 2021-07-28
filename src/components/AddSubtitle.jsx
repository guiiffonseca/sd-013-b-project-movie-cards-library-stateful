import React from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends React.Component {
  render() {
    const { value, funcao } = this.props;
    return (
      <label htmlFor="subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={ value }
          data-testid="subtitle-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default AddSubtitle;
