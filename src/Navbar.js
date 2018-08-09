import React, { Component } from 'react';

class Navbar extends Component{
  render(){
    return (
    <header className="posa w-100">
      <nav className="navbar navbar-expand-lg navbar-dark  px-md-5 py-3">
        <a className="navbar-brand" href="#"><img src="img/logo.png" className="img-fluid" alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto text-uppercase">
            <li className="nav-item active">
              <a className="nav-link" href="#">Buying <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Selling</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">our team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">join</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">homesmart help</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="fas fa-user cr"></i> login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
  }
}

export default Navbar;
