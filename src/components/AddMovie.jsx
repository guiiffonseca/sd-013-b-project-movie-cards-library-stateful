import React from 'react';

const ESTADO_INICIAL = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = ESTADO_INICIAL;
  }

  render() {
    return (
      <main>
        <form> </form>
      </main>
    );
  }
}

export default AddMovie;
