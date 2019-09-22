import React from 'react';
// import 'moment/locale/es.js';
// import 'rc-datepicker/lib/style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'




  const  DateSelect= ({
    handleChangeName,TeacName,handleChangeDate,startDate,link, handleUpload,handleChangeFile,handleSubmitNameTeac
  }) => 
  ( <div className="container">
  <div className="rowEman">
      <div className="col-25">
      <label >المعلمة    </label>
      </div>
      <div className="col-43">
      <input className="input--form-style" type="text" onChange={handleChangeName} name="TeacName" value={TeacName}/>
      </div>
      </div>    


  <div className="rowEman">
      <div className="col-25">
       
      <label >   التاريخ</label>
      </div>
      <div className="col-43">

      <DatePicker
          className="input--form-style"    
          selected={startDate}
          onChange={handleChangeDate }
          dateFormat="yyyy-MM-dd"
        />
      </div>
      </div>
      <div className="rowEman">
      <div className="col-25">
       
      <label >الملف</label>
      </div>
      <div className="col-43">

         <input className="input--form-style" type="file" onChange={handleChangeFile} name="link" value={link}/>
      </div>
      <button className="btn--form-style  " type="submit"  onClick={handleUpload} style={{padding:'1px 0px',marginTop:'10px'}} >حفظ
        <FontAwesomeIcon  icon={faCloudUploadAlt} className="icon-style"  />
        </button>

    </div>
 
   <div className="rowEman x">
   <input className="btn--form-style " type="submit" value='اضافة' onClick={handleSubmitNameTeac}/>
   </div>   
</div>
      );
  

export default DateSelect;