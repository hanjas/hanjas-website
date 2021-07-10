import React, {Component} from 'react';
import './App.css';

import WelcomePage from './components/WelcomePage';
import WhatIKnow from './components/WhatIKnow';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

class App extends Component {

  render() {
    return (
      <div className="App">
        <WelcomePage />
        <WhatIKnow />
        <Blogs />
        <Contact />
      </div>
    );
  }
}

export default App;