import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      // storyline: '',
      // rating: 0,
      // imagePath: '',
      // genre: 'action',
    };

    this.onNewTitle = this.onNewTitle.bind(this);
    this.onNewSubTitle = this.onNewSubTitle.bind(this);
  }

  onNewTitle(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  onNewSubTitle(event) {
    console.log(event.target.value);
    this.setState({ subtitle: event.target.value });
  }

  render() {
    const { callBack } = this.props;
    const { title, subtitle } = this.state;
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
        <label htmlFor="newSubtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ subtitle }
            onChange={ this.onNewSubTitle }
            data-testid="subtitle-input"
            id="newSubtitle"
          />
        </label>
        { console.log(callBack) }
      </form>
    );
  }
}

AddMovie.propTypes = {
  callBack: PropTypes.func.isRequired,
};

export default AddMovie;
