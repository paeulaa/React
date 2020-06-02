import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Masthead from './components/Masthead'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Call_to_action from './components/Contact'
import Services from './components/Contact'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Masthead/>
        <Portfolio/>
        <About/>
        <Contact/>
        <Call_to_action/>
        <Services/>
        <Footer/>
      </div>
    );
  }
}

export default App;