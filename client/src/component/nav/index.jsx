import React, { Component } from 'react';
import NavElement from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Background from './../img/sidebar-5.jpg';

import FontAwesomeIcon from'react-fontawesome';

class Nav extends Component {
  render() {
    const urlList = [
      {
        id: 1,
        txt: 'الاذاعة الدراسية',
        link: '/',
      },
      {
        id: 2,
        txt: 'الخطط',
        link: '/plan',
      },
      {
        id: 3,
        txt: 'التقارير',
        link: '/report',
      },
      {
        id: 4,
        txt: 'التعاميم',
        link: '/generalization',
      },
      {
        id: 5,
        txt: 'صادر و وارد النشاط',
        link: '/activities',
      },
      {
        id: 6,
        txt: 'منجزات المشاريع الوزارية',
        link: '/projects',
      },
      {
        id: 7,
        txt: 'الدعاية والاعلان',
        link: '/advertising',
      },
      {
        id: 8,
        txt: 'ملف انجاز دائرة النشاط',
        link: '/file',
      },
      {
        id: 9,
        txt: 'ميزانية النشاط',
        link: '/pudjet',
      },
    
    ];
    return (
      <div >
        <div className="sidebar" data-image={Background }>
        
        <nav className=" bg-light navbar-default ">

          <div className="sidebar-collapse">

            <div className="navbar-nav" id="side-menu">
            <i className="fa fa-spinner fa-spin"></i>
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
