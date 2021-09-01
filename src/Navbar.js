import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  return(
    <div>
    <header>
    <nav className="App">
      <ul className="nav">
        <li className="nav-elem nav-elem-links">TextUtilities</li>
        <li className="nav-elem"><Link className="nav-elem-links" exact to="/">home</Link></li>
        <li className="nav-elem"><Link className="nav-elem-links" exact to="/about">about</Link></li>
        <button className="theme-btns" id="theme-btn" onClick={props.lightToggle} > light mode </button>
        <button className="theme-btns" id="theme-btn" onClick={props.darkToggle} > dark mode </button>
        <button className="theme-btns" id="theme-btn" onClick={props.yellowToggle} > yellow mode </button>
        
    </ul>
    </nav>
    </header>
    </div>
    )
}