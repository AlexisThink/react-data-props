import React, { Component } from 'react';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Alexis Olveres" date="Martes" />
        <Welcome name="Patricia Horta" date="Jueves"  />
      </div>
    );
  }
}

export default App;