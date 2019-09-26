import React, { Component } from 'react';
import ButtonRadio from './button.js'


class Radio extends Component {

    constructor(props) {
      super(props);
      this.state = {
        titel:'',
        button1:false,
        button2:false,
        nosection:'',
      };
     
    }

clickOut=()=>{
  this.setState({button1:true,button2:false, nosection:1})
}

clickIn =()=>{
this.setState({button2:true,button1:false,nosection:2})
}
  
 
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
   <ButtonRadio nosection={this.state.nosection}/>
         </div>
      }
            {this.state.button2 &&
        <div className="menu-style">
   <ButtonRadio  nosection={this.state.nosection}/>
         </div>
      }
      </div>
        </div> 
        );
    }
  }


export default Radio ;