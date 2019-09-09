const {radioInsert} = require('./../database/queries/insert.js');

exports.post = (req, res) => {

  

  console.log("ee",req.body);

  const {titel, description,url} = req.body;
  radioInsert(titel, description,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }

