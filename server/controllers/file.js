

const { fileInsert} = require('./../database/queries/insert.js');

exports.post = (req, res) => {

  

  console.log("ee report",req.body);

  const {link} = req.body;
  fileInsert(link,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error , ok:'error'});
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success',result });
    }
  });
  
  }
