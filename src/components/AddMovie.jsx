// implement AddMovie component here
import React from 'react';
import Input from './Input';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.EventSetstate = this.EventSetstate.bind(this);
  }

  EventSetstate(event) {
    this.setState(({ [event.target.name]: event.target.value }));
  }

  render() {
    const { title, subtitle, imagePath } = this.state;
    return (
      <form data-testid="add-movie-form">

        <Input
          texto="Título"
          value={ title }
          nome="title"
          tipo="text"
          id="add"
          dataID="title-input"
          func={ this.EventSetstate }
          idLabel="title-input-label"
        />

        <Input
          texto="Subtítulo"
          value={ subtitle }
          nome="subtitle"
          tipo="text"
          id="addSub"
          dataID="subtitle-input"
          func={ this.EventSetstate }
          idLabel="subtitle-input-label"
        />

        <Input
          texto="Imagem"
          value={ imagePath }
          nome="imagePath"
          tipo="text"
          id="addimg"
          dataID="image-input"
          func={ this.EventSetstate }
          idLabel="image-input-label"
        />

      </form>
    );
  }
}
