import React, { Component } from 'react';
import Search from '../features/Search'
import RepoList from '../features/RepoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <RepoList/>
      </div>
    );
  }
}

export default App;
