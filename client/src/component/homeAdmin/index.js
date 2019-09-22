import React, { Component } from 'react';
import './style.css';
import bookmark from './../../img/bookmark.png'
 

class AdminIcon extends Component {

      constructor(props) {
        super(props);
        this.state = {
   
        };
    
    
      }
  
    
  
      render() {
    
        return (  <div className=" main page-wrapper bg-gra-02 p-t-80 p-b-100 font-poppins">
        <div className="wrapper wrapper--w780">
  
  <div className="container">
  
  <div className="flex-icon-admin">
    <div><a className="link--color" href="/admin/radio" ><div><img style={{width:'90px',height:'90px' ,    paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>
    الاذاعة المدرسية</a></div>
    <div><a className="link--color" href="/admin/plan" >
    <div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> 
    </div>
    الخطط
  
    </a></div>
    <div><a className="link--color" href="/admin/report" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>التقارير</a></div>
    <div><a className="link--color" href="/admin/generalization" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/></div> التعاميم</a></div>
    <div><a className="link--color" href="/admin/activities" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>صادر ووارد النشاط</a></div>
    <div><a className="link--color"  href="/admin/projects" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>منجزات المشاريع الوزارية</a></div>
    <div><a className="link--color" href="/admin/advertising" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/></div> الدعاية والاعلان</a></div>
    <div><a className="link--color" href="/admin/file" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>ملف انجاز دائرة النشاط</a></div>
    <div><a className="link--color" href="/admin/pudjet" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/></div> ميزانية النشاط </a></div>  
    
  </div>
  
  
  </div>
  
       
          </div> 
          </div>);
      }
    }
  
  
  export default AdminIcon ;