const {pudjetInsert} = require('./../database/queries/insert.js');

const {budgetSelect} = require('./../database/queries/select.js');

exports.get = (req,res) =>{

  budgetSelect((error, result) => {
    if (error) {
      console.log("errin select ",error);
      
      res.send({ error });
    } else if  (!result.length){
      res.send({ msg: 'لايوجد ملفات مرفوعة بقسم الميزانية' });
    }else {
      console.log("result select ",result);
      
      res.send({ok:'responce', result});
    }
  });
}


exports.post = (req, res) => {

  console.log("ee pudjet",req.body);

  const {valueTitelOut, valueDescriptionOut,valueTitelIn,valueDescriptionIn,url} = req.body;
  pudjetInsert(valueTitelOut, valueDescriptionOut,valueTitelIn,valueDescriptionIn,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }
 