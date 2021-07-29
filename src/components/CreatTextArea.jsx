import React from 'react';

export default class CreatTextArea extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <textarea
        name="storyline"
        id="storyline"
        data-testid="storyline-input"
        value={ value }
        onChange={ onChange }
      >
        Sinopse
      </textarea>
    );
  }
}
