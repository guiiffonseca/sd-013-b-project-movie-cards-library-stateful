import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      // subtitle: '',
      // storyline: '',
      // rating: 0,
      // imagePath: '',
      //genre: 'action',
    };

    this.onNewTitle = this.onNewTitle.bind(this);
  }

  onNewTitle(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  render() {
    const { callBack } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="newTitle" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ title }
            onChange={ this.onNewTitle }
            data-testid="title-input"
            id="newTitle"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default AddMovie;
