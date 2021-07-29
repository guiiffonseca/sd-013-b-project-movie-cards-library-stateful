import React from 'react';

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

export default Genre;
