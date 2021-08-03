import React from 'react'

class Title extends React.Component {

  render() {
    const { title } = this.props
    return (
      <label
        htmlFor="title"
        data-testid="title-input-label">
        Título
        <input
          type="text"
          data-testid="title-input"
          value={title}
        />
      </label>
    )
  }
}

export default Title;