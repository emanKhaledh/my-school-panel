const {projectInsert} = require('./../database/queries/insert.js');
const {achievementsSelect} = require('./../database/queries/select.js');


exports.get = (req,res) =>{

  achievementsSelect((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    } else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم المشاريع' });
    }else {
      console.log("result select ",result);
      
      res.send({ok:'responce',  result});
    }
  });
  

}







exports.post = (req, res) => {
  console.log("ee report",req.body);

  const {titel, description ,url} = req.body;
  projectInsert(titel, description,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }
