import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Security from './Security';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
function App() {
  return (
    <div className = 'app'>
      <Header/>
      <div className='app__body'>
        <Sidebar/>
        <Security/>
      </div>
    </div>
  );
}

export default App;
