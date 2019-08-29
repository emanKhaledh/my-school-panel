const {projectInsert} = require('./../database/queries/insert.js');

exports.post = (req, res) => {

  

  console.log("ee report",req.body);

  const {titel, description ,link} = req.body;
  projectInsert(titel, description,link,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }
