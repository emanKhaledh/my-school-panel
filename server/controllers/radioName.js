const {radioInsertName} = require('./../database/queries/insert.js');

exports.post = (req, res) => {

  

  console.log("ename teach",req.body);

  const {TeacName,startDate,url} = req.body;
  radioInsertName(TeacName,startDate,url,(error, result) => {
    if (error) {
      console.log("errdb",error);
      
      res.send({ error });
    } else {
      console.log("resultdb",result);
      
      res.send({ ok: 'Success' });
    }
  });
  
  }