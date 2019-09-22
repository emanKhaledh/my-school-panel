const {activitiesInInsert } = require('./../database/queries/insert.js');
const { activitInSelect } = require('./../database/queries/select.js')


exports.get = (req,res) =>{

  activitInSelect((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    }else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم النشاطات الواردة' });
    }
    
    
    else {
      console.log("result select ",result);
      
      res.send({ok:'responce', result});
    }
  });
}


exports.post = (req, res) => {

  console.log("ee activity  in",req.body);

  const {valueTitelIn, valueDescriptionIn,url} = req.body;
  activitiesInInsert(valueTitelIn, valueDescriptionIn,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }
 
