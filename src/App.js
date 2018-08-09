import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import Footer from './Footer';
import CopyRight from './CopyRight';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
      <CopyRight/>
      </div>
    );
  }
}

export default App;
