import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
  render() {
    const {
      labelId,
      testId,
      txt,
      id,
      value,
      onChange } = this.props;

    return (
      <label
        data-testid={ labelId }
        htmlFor={ id }
      >
        {txt}
        <textarea
          data-testid={ testId }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  labelId: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
