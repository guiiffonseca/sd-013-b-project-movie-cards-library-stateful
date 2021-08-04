import React from 'react';
import PropTypes from 'prop-types';

class SubTitle extends React.Component {
  render() {
    const { subtitle, onChange } = this.props;

    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ onChange }
          name="subtitle"
        />
      </label>
    );
  }
}

SubTitle.propTypes = {

  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

};

export default SubTitle;
