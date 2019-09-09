const {pudjetInsert} = require('./../database/queries/insert.js');

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
 