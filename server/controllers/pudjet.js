const {pudjetInsert} = require('./../database/queries/insert.js');

exports.post = (req, res) => {

  

  console.log("ee report",req.body);

  const {pudjetSchool, pudjetWork} = req.body;
  pudjetInsert(pudjetSchool, pudjetWork,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }
