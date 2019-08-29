
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'




const Form= ({
  handleChange, placeholder,nameInput,label,handleSubmit,value,labelTitel,valueTitel,nameTitel,name,handleChangeFile,handleUpload,
}) => 
(

  <div class="container">
    
    {/* <form  onSubmit={handleSubmit}> */}

  <div class="rowEman">
      <div class="col-25">
        <label >{labelTitel}</label>
      </div>
      <div class="col-75">
         <input className="input--form-style" onChange={handleChange} value={valueTitel} name={nameTitel} placeholder="من فضلك العنوان.. "/>
      </div>
      </div>
      <div class="rowEman">
      <div class="col-25">
         <label >  {label} </label>
      </div>
      <div class="col-75">
          <textarea className="input--form-style" placeholder={placeholder} onChange={handleChange} value={value} name={name}/>
      </div>
      </div>
      <div className="rowEman">
      <div class="col-25">
        <label >  اختر ملف للرفع</label>
      </div>
      <div className="col-50">
        <input className="input--form-style" style={{paddingRight:'0px' }}type="file" onChange={handleChangeFile} multiple />
      </div>
     
        <button className="btn--form-style  " type="submit"  onClick={handleUpload} style={{padding:'1px 0px',marginTop:'10px'}} >حفظ
        <FontAwesomeIcon  icon={faCloudUploadAlt} className="icon-style"  />
        </button>

    </div>
   {/* <input className="btn--form-style btn--radius-2 " type="submit" value='خزن'  onClick={this.handleInsertDB} /> */}
   

   <div class="rowEman x">
   <input className="btn--form-style " type="submit" value={nameInput}  onClick={handleSubmit}/>
    </div>
    </div>


);
 




export default Form;

{/* <div class="container">
  <form action="/action_page.php">
    <div class="row">
      <div class="col-25">
        <label for="fname">First Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="lname">Last Name</label>
      </div>
      <div class="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="country">Country</label>
      </div>
      <div class="col-75">
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="subject">Subject</label>
      </div>
      <div class="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Submit">
    </div>
  </form>
</div>

</body> */}