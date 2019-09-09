// import React, { Component } from 'react';



// class  Pudjet extends Component {

//     constructor(props) {
//       super(props);
//       this.state = {
//        pudjetSchool:'',
//        pudjetWork:''
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({[event.target.name]: event.target.value} );
//     }
  
//     handleSubmit(event) {
//       console.log("statetitel",this.state.pudjetSchool);
//       console.log("statedes",this.state.pudjetWork);
//             event.preventDefault();
      
//             const inputsValues = {
//               pudjetSchool: this.state.pudjetSchool,
//               pudjetWork: this.state.pudjetWork,
//             };
  
//             var url = '/api/pudjet';
         
            
//             fetch(url, {
//               method: 'POST', // or 'PUT'
//               body: JSON.stringify(inputsValues), // data can be `string` or {object}!
//               headers:{
//                 'Content-Type': 'application/json'
//               }
//             }).then(res => res.json())
//             .then(response => {
//               if (response.ok ) {
//              alert(" تم اضافة الميزانية");
//              this.setState({
//               pudjetSchool:'',
//               pudjetWork:''
//             });
//               }
//               else{
               
//             alert("حدث خط ما " )
//               }
//               console.log('Success:', JSON.stringify(response))
//             })
//             .catch(error => console.error('Error:', error));
      
//     }
  
//     render() {
//       return (  <div className=" main page-wrapper bg-gra-02 p-t-80 p-b-100 font-poppins">
//       <div className="wrapper wrapper--w780">
//       <div class="container">
//      <form onSubmit={this.handleSubmit}>
//      <div class="rowEman">
// <div class="col-25">
//       <label>
//         وارد الصندوق المدرسي
//       </label>
//       </div>
//       <div class="col-75">
//       <input type="text" className="input--form-style" onChange={this.handleChange}  name="pudjetSchool" value={this.state.pudjetSchool}/>
//      </div>
//      </div>
//      <div class="rowEman">
// <div class="col-25">
//       <label>وارد الميزانية التشغيليه</label>
//       </div>
//       <div class="col-75">
//       <input type="text" className="input--form-style" onChange={this.handleChange} name="pudjetWork" value={this.state.pudjetWork}/>
//       </div>
//       </div>
//       <div class="rowEman x">
// <input className="btn--form-style btn--radius-2 " type="submit" value='اضافة'/>
// </div>

//       </form>
//       </div>
//         </div>
//         </div> );
//     }
//   }


// export default Pudjet ;
