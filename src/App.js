import React, { Component } from 'react';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div class="page-header">
          <h1><center>React Components</center></h1>
        </div>

        <div class="row">
        <div class="col-xs-6 col-md-3">
            <img className="imageStyle" src="http://noeticforce.com/sites/default/files/component-dom-tree.png" alt="Some Logo"/>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
