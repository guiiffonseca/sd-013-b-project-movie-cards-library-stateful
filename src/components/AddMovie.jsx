import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { callBack } = this.props;
    return (
      <form>
        <input type="text" onClick={ callBack } />
      </form>
    );
  }
}

AddMovie.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default AddMovie;
