import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="genre">
        Gênero:
        <input
          id="genre"
          value={ state }
          onChange={ evento }
          name="genre"
          type="text"
        />
      </label>
    );
  }
}

Genre.propTypes = {
  state: PropTypes.string,
  evento: PropTypes.func,
};

Genre.defaultProps = {
  state: '',
  evento: undefined,
};

export default Genre;
