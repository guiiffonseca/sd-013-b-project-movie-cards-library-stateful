import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form id="search-bar-form">
        <label htmlFor="searchText">
          Busca de Filmes
          <input type="search" name="searchText" id="searchText" />
          <button type="submit">
            Procurar
          </button>
        </label>
      </form>
    );
  }
}
