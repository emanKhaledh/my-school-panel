

import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import SideNavPage from './component/nav/index';
import Plan from './component/plan';
import Report  from './component/report/index';
import Generalization from './component/generalization/index';
import Activity from './component/activity/index';
import Project from './component/project/index';
import Advertising from './component/advertising/index';
import  Pudjet  from './component/pudjet/index';
 import UplodeFile from './component/file/index';
 import Radio from './component/radio/index';
// import UplodeFile from './component/file/index'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <SideNavPage />
      <Switch>
       <Route path="/plan" component={Plan} />
       <Route path="/report" component={Report } />
       <Route path="/generalization" component={Generalization } />
       <Route path="/activities" component={Activity} />
       <Route path="/projects" component={Project} />
       <Route path="/advertising" component={Advertising} />
       <Route path="/pudjet" component={Pudjet} />
       <Route path="/file" component={UplodeFile} />
       <Route path="/" component={Radio} />
       <Route path="/file" component={UplodeFile} />
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
