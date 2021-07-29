import React from 'react';
import PropTypes from 'prop-types';

class ImageLabel extends React.Component {
  render() {
    const { id, prop, name, label, onChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${id}-input-label` }>
        {label}
        <input
          value={ prop }
          type="text"
          name={ name }
          data-testid={ `${id}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

ImageLabel.propTypes = {
  id: PropTypes.string.isRequired,
  prop: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageLabel;
