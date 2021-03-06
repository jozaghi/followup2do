import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';


import Header from "./components/header/header"
import MainPage from "./components/mainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainPage/>
      </div>
    );
  }
}

export default App;
