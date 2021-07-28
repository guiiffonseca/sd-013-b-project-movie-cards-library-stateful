import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <div>
        <form>
          {onClick}
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
