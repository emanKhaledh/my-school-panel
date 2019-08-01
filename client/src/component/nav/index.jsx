import React, { Component } from 'react';
import NavElement from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

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
        link: '/c',
      },
      {
        id: 5,
        txt: 'صادر و وارد النشاط',
        link: '/exersice',
      },
      {
        id: 6,
        txt: 'منجزات المشاريع الوزارية',
        link: '/project',
      },
      {
        id: 7,
        txt: 'الدعاية والاعلان',
        link: '/contact',
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
      <div id="wrapper">
        <nav className="navbar bg-light navbar-default ">

          <div className="sidebar-collapse">

            <div className="navbar-nav" id="side-menu">

              {urlList.map(item => (
                <span className="nav-item" key={item.id} id="side-menu">
                  <NavElement txt={item.txt} link={item.link} />
                </span>
              ))}

            </div>
          </div>
        </nav>
      </div>
    );
  }
}


{ /* <nav class="navbar bg-light">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link 3</a>
    </li>
  </ul>
</nav> */ }

export default Nav;
