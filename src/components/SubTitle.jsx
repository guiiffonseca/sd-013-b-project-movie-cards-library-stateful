import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
        <label htmlFor="sub" data-testid="subtitle-input-label">
        Subtítulo:
        <input type="text" id="sub" name="subtitle" data-testid="subtitle-input" 
          value={ value }
          onChange={ onChange }
        />
        </label>
    );
  }
}

SubTitle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
export default SubTitle;
