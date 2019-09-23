import React, { Component } from 'react';
import Form from './../form/index';
import {storage} from './../../firebase/index';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
 
const SweetAlert = withSwalInstance(swal);


class Plan extends Component {

    constructor(props) {
      super(props);
      this.state = {
        titel:'',
        placeholder: 'من فضلك ادخل الخطة',
        valueDescription:'',
        valueTitel:'',
        url:'',
        show:false,
        image:''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
  
    handleSubmit(event) {

            event.preventDefault();
      
            const inputsValues = {
              titel: this.state.valueTitel,
              description: this.state.valueDescription,
              url:this.state.url
            };
  
            var url = '/api/plan';
         
            
            fetch(url, {
              method: 'POST', // or 'PUT'
              body: JSON.stringify(inputsValues),
              headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .then(response => {
              if (response.ok ) {
                this.setState({show:true,valueDescription:'',url:'',valueTitel:''})
          
              }
              else{
               
            alert("حدث خط ما " + response)
              }
            
            })
            .catch(error => console.error('Error:', error));
      
    }

    render() {
      return (  <div className=" main page-wrapper bg-gra-02 p-t-80 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
  
   
      <Form  handleChange={this.handleChange} placeholder={this.state.placeholder} nameInput='اضافة '
      handleSubmit={this.handleSubmit} value={this.state.valueDescription} label='الخطة' labelTitel='عنوان  الخطة' valueTitel={this.state.valueTitel} nameTitel="valueTitel"  url={this.state.url} handleChangeFile={this.handleChangeFile} name="valueDescription"  handleUpload ={this.handleUpload }/>
            {this.state.show &&
      <SweetAlert
        show={this.state.show}
        title="الخطط"
        text="تم اضافة الخطة"

        onConfirm={() => this.setState({ show: false })}
      />
  }
     
        </div> 
        </div>);
    }
  }


export default Plan;
