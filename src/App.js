//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Textarea from './Textarea.js';
import React, {useState} from 'react';
import About from './About.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [btnMode,setBtnMode] = useState('def');

  const lightToggle = ()=> {
    setMode('light');
    setBtnMode('def');
  }
  const darkToggle = ()=> {
    setMode('dark');
    setBtnMode('def');
  }
  const yellowToggle = ()=> {
    setMode('yellow');
    setBtnMode('yellow');
  }


  return (
    <>
    <Router>
    <Navbar mode={mode} lightToggle={lightToggle} darkToggle={darkToggle} yellowToggle={yellowToggle} />
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textarea btnMode={btnMode} mode={mode} />
          </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;