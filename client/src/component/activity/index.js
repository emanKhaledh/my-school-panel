import React, { Component } from 'react';
import Form from './../form/index';
import {storage} from './../../firebase/index';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
 
const SweetAlert = withSwalInstance(swal);



class Activity extends Component {

    constructor(props) {
      super(props);
      this.state = {
        titel:'',
        placeholder: 'من فضلك ادخل النشاط',
        valueDescriptionOut:'',
        valueTitelOut:'',
        valueDescriptionIn:'',
        valueTitelIn:'',
        button1:false,
        button2:false,
        url:'',
        show:false,
        image:''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmitOut = this.handleSubmitOut.bind(this);
      this.handleSubmitIn = this.handleSubmitIn.bind(this);
     
    }

clickOut=()=>{
  this.setState({button1:true,button2:false})
}

clickIn =()=>{
this.setState({button2:true,button1:false})
}
  
    handleChange(event) {
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
  
  
    handleSubmitIn(event) {
   
            event.preventDefault();
      
            const inputsValues = {
              valueDescriptionIn:this.state.valueDescriptionIn,
              valueTitelIn:this.state.valueTitelIn,
              url:this.state.url
            };
           
  
            var url = '/api/activityIn';
         
            
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(inputsValues), // data can be `string` or {object}!
              headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .then(response => {
              if (response.ok ) {
       
             this.setState({
            
              valueDescriptionIn:'',
              valueTitelIn:'',
              show:true,
              url:''
            });
              }
              else{
               
            alert("حدث خط ما " + response)
              }
              console.log('Success:', JSON.stringify(response))
            })
            .catch(error => console.error('Error:', error));
      
    }
    handleSubmitOut(event) {
   
      event.preventDefault();

      const inputsValues = {
        valueDescriptionOut:this.state.valueDescriptionOut,
        valueTitelOut:this.state.valueTitelOut,
      
        url:this.state.url
      };
     

      var url = '/api/activityOut';
   
      
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(inputsValues), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => {
        if (response.ok ) {
 
       this.setState({
        valueDescriptionOut:'',
        valueTitelOut:'',
    
        show:true,
        url:''
      });
        }
        else{
         
      alert("حدث خط ما " + response)
        }
        console.log('Success:', JSON.stringify(response))
      })
      .catch(error => console.error('Error:', error));

}

    render() {
      return (  <div className=" main page-wrapper bg-gra-02 p-t-80 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
    
        <div className="container btn--container-style">
          <button onClick={this.clickOut} className='btn--form-style btn--radius-2'>النشاطات الصادرة</button>
          <button onClick={this.clickIn} className='btn--form-style btn--radius-2'>النشاطات الواردة</button>
        </div>

            {this.state.button1 &&
        <div className="menu-style">
   
     
   
   <Form  handleChange={this.handleChange} placeholder={this.state.placeholder} nameInput='اضافة '
   handleSubmit={this.handleSubmitOut} value={this.state.valueDescriptionOut} label='صادر النشاط' labelTitel='عنوان  النشاط' valueTitel={this.state.valueTitelOut} nameTitel="valueTitelOut"   url={this.state.url} handleChangeFile={this.handleChangeFile} name="valueDescriptionOut"  handleUpload ={this.handleUpload }/>
         {this.state.show &&
   <SweetAlert
     show={this.state.show}
     title="النشاطات"
     text="تم اضافة النشاط"
     onConfirm={() => this.setState({ show: false })}
   />
}
  
  </div>
      }
            {this.state.button2 &&
        <div className="menu-style">

 <Form  handleChange={this.handleChange} placeholder={this.state.placeholder} nameInput='اضافة '
      handleSubmit={this.handleSubmitIn} value={this.state.valueDescriptionIn} label='وارد النشاط  '  labelTitel='عنوان النشاط' valueTitel={this.state.valueTitelIn}  nameTitel="valueTitelIn"   url={this.state.url} handleChangeFile={this.handleChangeFile} name="valueDescriptionIn"  handleUpload ={this.handleUpload }/>
            {this.state.show &&
      <SweetAlert
        show={this.state.show}
        title="النشاطات"
        text="تم اضافة النشاط"
        onConfirm={() => this.setState({ show: false })}
      />
  }







         </div>
      }
      </div>
        </div> 
        );
    }
  }


export default Activity ;