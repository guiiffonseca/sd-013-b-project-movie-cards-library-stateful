import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  /* constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  } */

  render() {
    const { subtitle,
      title,
      imagePath,
      storyline,
      /* rating,
       genre */
    } = this.props;
    return (
      <section>
        <form className="form" data-testid="add-movie-form">
          <label htmlFor="title-input" data-testid="title-input-label">
            Título
            <input type="text" value={ title } data-testid="title-input" />
          </label>
          <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
            Subtítulo
            <input type="text" value={ subtitle } data-testid="subtitle-input" />
          </label>
          <label htmlFor="image-input" data-testid="image-input-label">
            Imagem
            <input value={ imagePath } data-testid="image-input" />
          </label>
          <label htmlFor="storyline-input" data-testid="storyline-input-label">
            Sinopse
            <input
              data-testid="storyline-input"
              type="text"
              name="storyline"
              value={ storyline }
            />
          </label>
        </form>
      </section>
    );
  }
}

AddMovie.propTypes = ({
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  genre: PropTypes.string,
}).isRequired;

export default AddMovie;
