

import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import SideNavPage from './component/nav/index';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideNavPage />

      </div>
    </BrowserRouter>
  );
}

export default App;
