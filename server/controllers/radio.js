const {radioInsert} = require('./../database/queries/insert.js');
const {radioSelect} = require('./../database/queries/select.js');

exports.get = (req,res) =>{
  console.log("radio",req.params.id);
  
const {id} = req.params
  radioSelect(id,(error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    } else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم الاذاعة' });
    }else {
      console.log("result select ",result);
      
      res.send({ok:'responce', result});
    }
  });
}

exports.post = (req, res) => {
  console.log("ee radio",req.body);

  const {titel, description,url,nosection} = req.body;
  radioInsert(titel, description,url,nosection,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }

