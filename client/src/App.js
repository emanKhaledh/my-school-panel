

import './App.css';
import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import SideNavPage from './component/nav/index';
import Plan from './component/plan';
import Report  from './component/report/index';
import Generalization from './component/generalization/index';
import Activity from './component/activity/index';
import Project from './component/project/index';
import Advertising from './component/advertising/index';
import Pudjet  from './component/pudjet/index';
import UplodeFile from './component/file/index';
import Radio from './component/radio/index';
import  AdminIcon  from './component/homeAdmin/index';
import Home from './component/homeWeb/index';
// import UplodeFile from './component/file/index'

function App() {
  return (
    <BrowserRouter>
  
      <div className="App">    
      {window.location.pathname.includes ('/admin') && <SideNavPage /> }
      <Switch>
  

       <Route path="/admin/plan" component={Plan} />
       <Route path="/admin/report" component={Report } />
       <Route path="/admin/generalization" component={Generalization } />
       <Route path="/admin/activities" component={Activity} />
       <Route path="/admin/projects" component={Project} />
       <Route path="/admin/advertising" component={Advertising} />
       <Route path="/admin/pudjet" component={Pudjet} />
       <Route path="/admin/file" component={UplodeFile} />
       <Route path="/admin/radio" component={Radio} />
       <Route path="/admin/file" component={UplodeFile} />
       <Route path="/admin" component={ AdminIcon } />
  
  
      <Route excat path="/" component={Home} />
      
        
    
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
