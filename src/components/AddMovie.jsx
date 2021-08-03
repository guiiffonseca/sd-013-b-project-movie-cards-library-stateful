import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
    };

    this.onNewTitle = this.onNewTitle.bind(this);
    this.onNewSubTitle = this.onNewSubTitle.bind(this);
    this.onNewImagePath = this.onNewImagePath.bind(this);
    this.onNewStoryline = this.onNewStoryline.bind(this);
  }

  onNewTitle(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  onNewSubTitle(event) {
    console.log(event.target.value);
    this.setState({ subtitle: event.target.value });
  }

  onNewImagePath(event) {
    console.log(event.target.value);
    this.setState({ imagePath: event.target.value });
  }

  onNewStoryline(event) {
    console.log(event.target.value);
    this.setState({ storyline: event.target.value });
  }

  render() {
    const { callBack } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form>
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
        <label htmlFor="newImagePath" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            value={ imagePath }
            onChange={ this.onNewImagePath }
            data-testid="image-input"
            id="newImagePath"
          />
        </label>
        <label htmlFor="newStoryline" data-testid="storyline-input-label">
          Sinopse
          <input
            type="textarea"
            value={ storyline }
            onChange={ this.onNewStoryline }
            data-testid="storyline-input"
            id="newStoryline"
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
