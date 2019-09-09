import React, { Component } from 'react';
import './style.css';
import bookmark from './../../img/bookmark.png'
 



class Homeicon extends Component {

    constructor(props) {
      super(props);
      this.state = {
 
      };
  
  
    }

  

    render() {
  
      return (  <div className=" main page-wrapper bg-gra-02 p-t-80 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">

<div className="container">

<div className="flex-icon">
  <div><a className="link--color" href="/radio" ><div><img style={{width:'90px',height:'90px' ,    paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>
  الاذاعة المدرسية</a></div>
  <div><a className="link--color" href="/plan" >
  <div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> 
  </div>
  الخطط

  </a></div>
  <div><a className="link--color" href="/report" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>التقارير</a></div>
  <div><a className="link--color" href="/generalization" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/></div> التعاميم</a></div>
  <div><a className="link--color" href="/activities" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>صادر ووارد النشاط</a></div>
  <div><a className="link--color"  href="/projects" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>منجزات المشاريع الوزارية</a></div>
  <div><a className="link--color" href="/advertising" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/></div> الدعاية والاعلان</a></div>
  <div><a className="link--color" href="/file" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/> </div>ملف انجاز دائرة النشاط</a></div>
  <div><a className="link--color" href="/pudjet" ><div><img style={{width:'90px',height:'90px',paddingTop: '10px'}} src={bookmark} alt="icon"/></div> ميزانية النشاط </a></div>  
  
</div>


</div>

     
        </div> 
        </div>);
    }
  }


export default Homeicon ;

