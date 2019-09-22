const {radioInsertName} = require('./../database/queries/insert.js');
const {radioSelectName} = require('./../database/queries/select.js')





exports.get = (req,res) =>{

  radioSelectName((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    } else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم المشرفات عن الاذاعة' });
    }else {
      console.log("result select ",result);
      
      res.send({ok:'date', result});
    }
  });
}


exports.post = (req, res) => {
  console.log("ename teach",req.body);

  const {TeacName,startDate,url} = req.body;
  radioInsertName(TeacName,startDate,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }