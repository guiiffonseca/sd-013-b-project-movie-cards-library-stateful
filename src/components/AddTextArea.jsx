import React from 'react';

class AddTextArea extends React.Component {
  render() {
    const { value } = this.props;
    const { funcao } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        <textarea
          id="storyline"
          value={ value }
          data-testid="storyline-input"
          name="storyline"
          onChange={ funcao }
        />
      </label>
    );
  }
}

export default AddTextArea;
