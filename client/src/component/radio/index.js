import React, { Component } from 'react';
import Form from './../form/index';
import ButtonRadio from './button'


class Radio extends Component {

    constructor(props) {
      super(props);
      this.state = {
        titel:'',
        placeholder: 'من فضلك ادخل الخطة',
        valueDescriptionOut:'',
        valueTitelOut:'',
        valueDescriptionIn:'',
        valueTitelIn:'',
        button1:false,
        button2:false
      };
  
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
     
    }

clickOut=()=>{
  this.setState({button1:true,button2:false})
}

clickIn =()=>{
this.setState({button2:true,button1:false})
}
  
    // handleChange(event) {
    //   this.setState({[event.target.name]: event.target.value} );
    // }
  
    // handleSubmit(event) {
    //   console.log("statetitel",this.state.valueTitel );
    //   console.log("statedes",this.state.valueDescription);
    //         event.preventDefault();
      
    //         const inputsValues = {
    //           valueDescriptionOut:this.state.valueDescriptionOut,
    //           valueTitelOut:this.state.valueTitelOut,
    //           valueDescriptionIn:this.state.valueDescriptionIn,
    //           valueTitelIn:this.state.valueTitelIn,
    //         };
    //         Z
    //         var url = '/api/activities';
         
            
            // fetch(url, {
            //   method: 'POST', // or 'PUT'
            //   body: JSON.stringify(inputsValues), // data can be `string` or {object}!
            //   headers:{
            //     'Content-Type': 'application/json'
            //   }
            // }).then(res => res.json())
            // .then(response => {
            //   if (response.ok ) {
            //  alert("تم اضافة النشاط")
            //  this.setState({
            //   valueDescriptionOut:'',
            //   valueTitelOut:'',
            //   valueDescriptionIn:'',
            //   valueTitelIn:'',
            // });
            //   }
            //   else{
               
            // alert("حدث خط ما " + response)
            //   }
            //   console.log('Success:', JSON.stringify(response))
            // })
            // .catch(error => console.error('Error:', error));
      
    
  
    render() {
      return (  <div className=" main page-wrapper bg-gra-02 p-t-80 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
    
        <div className="container btn--container-style">
          <button onClick={this.clickOut} className='btn--form-style btn--radius-2'>
         الفصل الدراسي الأول
          </button>
          <button onClick={this.clickIn} className='btn--form-style btn--radius-2'>
         الفصل الدراسي الثاني
          </button>
        </div>

            {this.state.button1 &&
        <div className="menu-style">
   <ButtonRadio />
         </div>
      }
            {this.state.button2 &&
        <div className="menu-style">
   <ButtonRadio />
         </div>
      }
      </div>
        </div> 
        );
    }
  }


export default Radio ;