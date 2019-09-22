const {reportInsert} = require('./../database/queries/insert.js');
const {reportsSelect } = require('./../database/queries/select.js');


exports.get = (req,res) =>{

  reportsSelect ((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    } else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم التقارير' });
    }else {
      console.log("result select ",result);
      
      res.send({ ok:'responce', result});
    }
  });
  

}


exports.post = (req, res) => {
  console.log("ee report",req.body);

  const {titel, description,url } = req.body;
  reportInsert(titel, description,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }
