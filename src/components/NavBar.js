import React from 'react';

import '../../public/bootstrap/css/bootstrap.css';
import '../css/NavBar.css';

const NavBar = React.createClass({
  render () {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><img className="nav-image" src=""></img></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="/">All Topics</a></li>
              <li><a href="/topics/football/articles">Football</a></li>
              <li><a href="/topics/cooking/articles">Cooking</a></li>
              <li><a href="/topics/coding/articles">Coding</a></li>
              <li><a href="/users">Users</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

export default NavBar;
