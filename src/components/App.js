// Header and Footer would be components
// rename App to something more descriptive
// import logo ensures its bundled, but in general would avoid importing images
// li nav elements would be proper a links

import React, { Component } from 'react';
import Search from '../features/Search'
import RepoList from '../features/RepoList'
import logo from '../logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <a href="http://path.network">
            <img src={logo} alt=""/>
          </a>
          <ul>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li className="login">
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div className="App-flex">
          <Search/>
          <RepoList/>
        </div>
        <div className="Footer">
          <div className="Footer-byline">
            Everything by <a href="http://clearstreamcreative.com">Josh Kovitz</a> 2018
          </div>
        </div>
      </div>
    );
  }
}

export default App;