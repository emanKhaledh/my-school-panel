
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateSelect from './date.jsx';
import Form from './../form/index';
import {storage} from './../../firebase/index';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
 
const SweetAlert = withSwalInstance(swal);



class ButtonRadio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      button1:false,
      button2:false,
      titel:'',
      placeholder:'من فضلك ادخل الموضوع',
      valueDescription:'',
      valueTitel:'',
      url:'',
      startDate: new Date(),
      TeacName:'',
      show:false,
      image:''
     
    };
   
  }
  handleChange=(event)=> {
    this.setState({[event.target.name]: event.target.value} );
  }
  handleChangeFile = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot) => {
      // progrss function ....
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
         // error function ....
      console.log(error);
    }, 
  () => {
      // complete function ....
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
      })
  });
}
handleChangeDate = date => {
  this.setState({
    startDate: date
  });
};
handleChangeName = e =>{
  console.log("ddd",e.target.value);
  
  this.setState({[e.target.name]: e.target.value} );
}

handleSubmitNameTeac=(event)=>{
 
  event.preventDefault();
  const inputsValues = {
    startDate: this.state.startDate,
    TeacName: this.state.TeacName,
    url:this.state.url,
    nosection:this.props.nosection
  };

  var url = '/api/radioName';
  fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(inputsValues), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .then(response => {
    if (response.ok ) {
      this.setState({show:true,startDate:'',url:'', TeacName:''}) 
          }
    else{
     
  alert("حدث خط ما " )
    }
    console.log('Success:', JSON.stringify(response))
  })
  .catch(error => console.error('Error:', error));
}
handleSubmit=(event) =>{

        event.preventDefault();
        const inputsValues = {
          titel: this.state.valueTitel,
          description: this.state.valueDescription,
          url:this.state.url,
          nosection:this.props.nosection
        };

        var url = '/api/radioSubject';
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(inputsValues), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => {
          if (response.ok ) {
            this.setState({show:true,valueDescription:'',url:'',valueTitel:''}) 
                }
          else{
           
        alert("حدث خط ما " )
          }
          console.log('Success:', JSON.stringify(response))
        })
        .catch(error => console.error('Error:', error));
  
}

clickOut=()=>{
this.setState({button1:true,button2:false})
}

clickIn =()=>{
this.setState({button2:true,button1:false})
}
render(){
return(
       <div className="container btn--container-style-radio">
          <button  onClick={this.clickOut} className='btn--form-style-radio '>
          جدول توزيع المشرفات 
          </button>
          <button  onClick={this.clickIn} className='btn--form-style-radio  '>
          المواضيع
          </button>
   

            {this.state.button1 &&
              <div className="menu-style">
               <DateSelect  handleChangeDate={this.handleChangeDate} handleChangeName={this.handleChangeName}  startDate={this.state.startDate}
      TeacName={this.state.TeacName} handleChangeFile={this.handleChangeFile} handleUpload ={this.handleUpload }   handleSubmitNameTeac={this.handleSubmitNameTeac}/>
                 {this.state.show &&
      <SweetAlert
      icon="success"
        show={this.state.show}
        title="المشرفات"
        text="تم اضافة "
        onConfirm={() => this.setState({ show: false })}
      />
  }
              </div>}
        
              {this.state.button2 &&
        <div className="menu-style">
   {/* <Form /> */}
   <Form  handleChange={this.handleChange} placeholder={this.state.placeholder} nameInput='اضافة'
      handleSubmit={this.handleSubmit} value={this.state.valueDescription} label='الاذاعة'  labelTitel='عنوان الاذاعة ' valueTitel={this.state.valueTitel} nameTitel="valueTitel"  url={this.state.url} handleChangeFile={this.handleChangeFile} name="valueDescription"  handleUpload ={this.handleUpload }/>
               {this.state.show &&
      <SweetAlert
      icon="success"
        show={this.state.show}
        title="الاذاعة"
        text="تم اضافة الاذاعة"
      

        onConfirm={() => this.setState({ show: false })}
      />
  }
         </div>
      }

        </div>
    
);
}
}
 export default ButtonRadio;

