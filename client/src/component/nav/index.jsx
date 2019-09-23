import React, { Component } from 'react';
import NavElement from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import  NavTop from './navTop.jsx'


import FontAwesomeIcon from'react-fontawesome';

class Nav extends Component {
  render() {
    const urlList = [
      {
        id: 1,
        txt: 'الاذاعة الدراسية',
        link: '/admin/radio',
      },
      {
        id: 2,
        txt: 'الخطط',
        link: '/admin/plan',
      },
      {
        id: 3,
        txt: 'التقارير',
        link: '/admin/report',
      },
      {
        id: 4,
        txt: 'التعاميم',
        link: '/admin/generalization',
      },
      {
        id: 5,
        txt: 'صادر و وارد النشاط',
        link: '/admin/activities',
      },
      {
        id: 6,
        txt: 'منجزات المشاريع الوزارية',
        link: '/admin/projects',
      },
      {
        id: 7,
        txt: 'الدعاية والاعلان',
        link: '/admin/advertising',
      },
      {
        id: 8,
        txt: 'ملف انجاز دائرة النشاط',
        link: '/admin/file',
      },
      {
        id: 9,
        txt: 'ميزانية النشاط',
        link: '/admin/pudjet',
      },
    
    ];
    return (
      <div >
        < NavTop />
        <div className="sidebar" >
        
        <nav className=" navbar-default ">

          <div className="sidebar-collapse">

            <div className="navbar-nav" id="side-menu">
  
            <FontAwesomeIcon className= "fad fa-pen"/>
              {urlList.map(item => (
                <span className="nav-item" key={item.id} id="side-menu">
                  <NavElement txt={item.txt} link={item.link} />
                </span>
              ))}

            </div>
          </div>
        </nav>
        </div>
      </div>
    );
  }
}




export default Nav;
