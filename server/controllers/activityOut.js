const {activitiesOutInsert } = require('./../database/queries/insert.js');
const {activitOutSelect } = require('./../database/queries/select.js')


exports.get = (req,res) =>{

  activitOutSelect((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    } else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم النشاطات الصادرة' });
    }else {
      console.log("result select ",result);
      
      res.send({ok:'responce', result});
    }
  });
}


exports.post = (req, res) => {

  console.log("ee activity",req.body);

  const {valueTitelOut, valueDescriptionOut,url} = req.body;
  activitiesOutInsert(valueTitelOut, valueDescriptionOut,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }
 
