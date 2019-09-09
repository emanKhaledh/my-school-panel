
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'




const Form= ({
  handleChange, placeholder,nameInput,label,handleSubmit,value,labelTitel,valueTitel,nameTitel,name,handleChangeFile,handleUpload,
}) => 
(

  <div className="container">
    
    {/* <form  onSubmit={handleSubmit}> */}

  <div className="rowEman">
      <div className="col-25">
        <label >{labelTitel}</label>
      </div>
      <div className="col-75">
         <input className="input--form-style" onChange={handleChange} value={valueTitel} name={nameTitel} placeholder="من فضلك العنوان.. "/>
      </div>
      </div>
      <div className="rowEman">
      <div className="col-25">
         <label >  {label} </label>
      </div>
      <div className="col-75">
          <textarea className="input--form-style" placeholder={placeholder} onChange={handleChange} value={value} name={name}/>
      </div>
      </div>
      <div className="rowEman">
      <div className="col-25">
        <label >  اختر ملف للرفع</label>
      </div>
      <div className="col-50">
        <input className="input--form-style" style={{paddingRight:'0px' }}type="file" onChange={handleChangeFile} multiple />
      </div>
     
        <button className="btn--form-style  " type="submit"  onClick={handleUpload} style={{padding:'1px 0px',marginTop:'10px'}} >حفظ
        <FontAwesomeIcon  icon={faCloudUploadAlt} className="icon-style"  />
        </button>

    </div>
 
   <div className="rowEman x">
   <input className="btn--form-style " type="submit" value={nameInput}  onClick={handleSubmit}/>
    </div>
    </div>


);
 




export default Form;

