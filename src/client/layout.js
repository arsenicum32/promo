import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

//import "../../node_modules/uikit/dist/css/uikit.min.css"

import Home from './containers/home.js';
import About from './containers/about.js';
import uikit from './containers/uikit.js';
import notFound from './containers/notFound.js'
import Menu from './containers/menu.js'
import Gallery from './containers/gallery'


import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// UIkit.use(Icons);
//
// // components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className={'b-nav'}>
          <Menu />
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/uikit" component={uikit} />
        <Route exact path="/gallery" component={Gallery} />
      </div>
    );
  }
}
