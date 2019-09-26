
import React, { Component } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileDownload} from '@fortawesome/free-solid-svg-icons';

 



class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    const {result,resultStatus,msg} = this.props
    console.log("msg",msg);
    
  return(<div >
  
   {resultStatus === 'responce' &&
   <div className="flex-container-home">

    {result.map(item => (  <div key={item.id} className="card-home">
  <div className="container-home">
  {item.link && 
  <a  className="icon-down" href={item.link} ><FontAwesomeIcon   icon={faFileDownload}   /></a>
  }
    <h2>{item.title}</h2> 
    <p>{item.description}</p> 
  </div>
</div>
                
 ))}

</div>
   }
    {resultStatus === 'date' && 
   <div className="flex-container-home">
 
     <table style={{width:'70%'}}>
     <tbody>
  <tr>
    <th>الاسم</th>
    <th>التاريخ</th> 
    <th>الملف</th>
   
    
  </tr>
  {result.map(item => (  <tr key={item.id} >
    <td>{item.name}</td>
    <td>{item.date}</td>
  <td>   {item.link &&  <a  className="icon-down" href={item.link} ><FontAwesomeIcon   icon={faFileDownload}   /></a>}</td>
  
  
  </tr>


  )
)}
    </tbody>
</table>
</div>


    }

 <div style={{textAlign:'center',color: 'white',
    paddingTop:'10px'}}><p>{msg}</p></div>
  </div> 
  )
}
}
export default Result;