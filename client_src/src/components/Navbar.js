import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Meetups</a>
            <a href="" data-target="main-menu" className="sidenav-trigger button-collapse show-on-large"><i className="fa fa-bars"></i></a>
            <ul className="right hide-on-small-only">
              <li><Link to="/"><i className="fa fa-users"></i>&nbsp;Meetups</Link></li>
            </ul>
          </div>
            <ul className="sidenav" id="main-menu">
              <li><Link to="/"><i className="fa fa-users"></i>&nbsp;Meetups</Link></li>
              <li><Link to="/meetups/add"><i className="fa fa-plus"></i>&nbsp;Add Meetups</Link></li>
              <li><Link to="/about"><i className="fa fa-question-circle"></i>&nbsp;About</Link></li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;