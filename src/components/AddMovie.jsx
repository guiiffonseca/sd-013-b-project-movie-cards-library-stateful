import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddMovie extends Component {
  // this.state = {
  //   title: '',
  // };
  //  onTitleChange({ target }) {
  //  this.setState({
  //  title: target.value
  // });
  // }
  render() {
    const { titleValue, onTitleChange } = this.props;
    return (
      <form htmlFor="true" data-testid="add-movie-form">
        <label htmlFor="true" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            type="text"
            value={ titleValue }
            onChange={ onTitleChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  titleValue: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
};

// AddMovie.defaultProps = {
//   titleValue: 'undefined',
//   onTitleChange: 'undefined',
// };
