

const { fileInsert} = require('./../database/queries/insert.js');
const {fileSelect} = require('./../database/queries/select.js')
exports.get = (req,res) =>{

  fileSelect((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    }else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم ملف انجاز  ' });
    } else {
      console.log("result select ",result);
      
      res.send({ok:'responce', result});
    }
  });
  

}




exports.post = (req, res) => {


  const {link} = req.body;
  fileInsert(link,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error , ok:'error'});
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success',result });
    }
  });
  
  }
