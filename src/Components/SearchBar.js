import React from 'react';
import '../SearchBar.css';

class SearchBar extends React.Component {
  state = { results: '' };

  onSearchSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.results);
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark mb-3">
        <span className="navbar-brand mb-0 h1 ml-4 ">
          Image Gallery
          <i
            className="imageIcon fas fa-images fa-1x ml-2"
            style={{ color: 'white' }}
          />
        </span>
        <form onSubmit={this.onSearchSubmit} className="form-inline">
          <input
            className="form-control mr-sm-2 "
            type="text"
            placeholder="Search"
            value={this.state.results}
            onChange={e => this.setState({ results: e.target.value })}
          />
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default SearchBar;
