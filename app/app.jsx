import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import Main from 'Main';
import Post from 'Post';
import UserPage from 'UserPage';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Post}/>
      <Route path="users" component={UserPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
