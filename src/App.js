import React, { Component } from 'react';
import './App.css';
import Instrctions from './instructions/Instructions';
import MyAppWithContext from './context/File2_MyAppWithContext';



class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Simple React Context Tutorial</h1>
        <Instrctions />
        <MyAppWithContext />
      </div>
    );
  }
}

export default App;

//   ENCODE    https://www.freeformatter.com/html-entities.html
//   { === &#123;
//   < === &#60;
//   / === &#47;