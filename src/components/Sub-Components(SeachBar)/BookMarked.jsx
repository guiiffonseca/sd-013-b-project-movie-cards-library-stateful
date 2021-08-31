/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BookMarked extends Component {
  render() {
    const { bookmarkedOnly,
      onBookmarkedChange } = this.props;
    return (
      <div>
        <label className="imputCheckboxLabel" data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            checked={ bookmarkedOnly }
            type="checkBox"
            name="CheckboxImput"
            onChange={ onBookmarkedChange }
            data-testid="checkbox-input"
          />
        </label>
      </div>
    );
  }
}

BookMarked.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};
