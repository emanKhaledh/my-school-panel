import React, {Component} from 'react';
import {storage} from './../../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
 
const SweetAlert = withSwalInstance(swal);


class UplodeFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
      url: '',
      progress: 0,
      show: false
    }
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
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

  handleInsertDB =() =>{
    console.log("f");



fetch('/api/file', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({link:this.state.url}), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => {
  // if(response.ok === 'error'){
  //   console.log("err",response.error);
    
  // }else{
    if (response.ok === 'Success' ) {
      this.setState({show:true})
    }
    else{
     
  alert("حدث خط ما " + response)
    }
    console.log('Success:', JSON.stringify(response))
  })

.catch(error => console.error('Error:', error));
    
    
  }
  render() {
    console.log("url",this.state.url);
    
    // const style = {
    //   height: '100vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // };
    return (
      <div className=" main page-wrapper bg-gra-02 p-t-80 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
      <div class="container">
     
      <div className="rowEman">
      <progress value={this.state.progress} max="100" style={{
       height: '25px', 
       width: '447px',
       marginLeft: '224px'}}/>
      <br/>
      <div class="col-25">
        <label >  اختر ملف للرفع</label>
      </div>
      <div className="col-50">
      
        <input className="input--form-style" style={{paddingRight:'0px' }} type="file" onChange={this.handleChange} multiple />
        </div>
     
        {/* <div class="rowEman x">
   <input className="btn--form-style  " type="submit" value='ارفع'  onClick={this.handleUpload} />
    </div> */}  
    <button className="btn--form-style " type="submit"  onClick={this.handleUpload} style={{padding:'1px 0px',marginTop:'10px'}} >رفع
  <FontAwesomeIcon  icon={faCloudUploadAlt} className="icon-style"  />
  </button>
  </div>

          <div class="rowEman x">
   <input className="btn--form-style" type="submit" value='حفظ'  onClick={this.handleInsertDB} style={{    marginLeft: '118px'}}/>
    </div>
    {this.state.show &&
      <SweetAlert
        show={this.state.show}
        title="الاعلان"
        text="تم اضافة الاعلان"

        onConfirm={() => this.setState({ show: false })}
      />
  }
     
     
      </div>
      </div>
      </div>
    )
  }
}



export default UplodeFile;
