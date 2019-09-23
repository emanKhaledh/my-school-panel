import React, { Component } from 'react';
import './index.css';
import Result from './../homeWeb/result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import imageCover from './../../img/b.jpg'




class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
       url:'',
       result:[],
       resultStatus:'',
       msg:''
 
      };
  
  
    }


  clickLink = (e)=>{
this.setState({url:e.target.value},()=>{
  fetch(`/api/${this.state.url}`, {
    credentials: 'same-origin',
    method: 'GET',
  }).then(res=>res.json())
    .then((res) => {

      this.setState({result:res.result , resultStatus:res.ok,msg:res.msg})

    })
    .catch((err)=> {
    
      console.log("error",err);
      
    });
})
  }

    render() {
      // className="  page-wrapper bg-gra-02  font-poppins"red
    return (  <div >

     


  <div className="containerWeb">
    <div className="topnavWeb">
    <button onClick={this.clickLink} value="radioSubject">
  الاذاعة المدرسية
  </button>

  <button onClick={this.clickLink} value="radioName">
  جدول توزيع المشرفات 
  </button>
  <button  onClick={this.clickLink} value="plan">  
  الخطط
   </button>
   <button onClick={this.clickLink} value="report">
    التقارير
   </button>
   <button onClick={this.clickLink} value="generalization">
  التعاميم
</button >
<button onClick={this.clickLink} value="activityOut">
  صادرالنشاط
  </button>
  <button onClick={this.clickLink} value="activityIn">
 وارد النشاط
  </button>
  <button onClick={this.clickLink} value="projects">
  منجزات المشاريع الوزارية
  </button >
  <button onClick={this.clickLink} value="advertising"> 
  الدعاية والاعلان
  </button>
  <button onClick={this.clickLink} value="file">
  ملف انجاز دائرة النشاط
  </button>
  <button  onClick={this.clickLink} value="pudjet">
   ميزانية النشاط 
  </button>
  <a href="/admin"  className="topnavWeb-icon"><FontAwesomeIcon   icon={faUserCog} className="icon-style"  /></a>
    </div>

 
  </div>
  <div className="containerWeb1">
      {/* <div className="bg-imgWeb"> */}
<img  src={imageCover} alt="dddddddddddddd" style={{width:'100%'}}/>

  <div class="content">
  <div style={{textAlign: 'center',
    color: '#f2f2f2'}}> <h1>المواضيع</h1></div>
{this.state.url && <Result  result={this.state.result} resultStatus={this.state.resultStatus} msg={this.state.msg}/>}
</div>

</div>
{/* </div> */}
     
       
        </div>);
    }
  }


export default Home ;









