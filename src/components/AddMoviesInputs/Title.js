import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const p = this.props;
    return (
      <div>
        <label data-testid="title-input-label" htmlFor="addmovietitleinput">
          Título
          <input
            type="text"
            value={ p.value }
            id="addmovietitleinput"
            data-testid="title-input"
            onChange={ p.onChange }
            name="title"
          />
        </label>
      </div>);
  }
}

Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
