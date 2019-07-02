import React from 'react';
import SearchBar from './Components/SearchBar';
import unsplash from './api/unsplash';
import Images from './Components/Images';

class App extends React.Component {
  state = { images: [], load: false };

  onFormSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });
    this.setState({ images: response.data.results, load: true });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmit} />
        <Images images={this.state.images} />
        {this.state.load === false ? (
          <div className="jumbotron">
            <h1 className="display-4 text-center">Search Away!!</h1>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
