const connection = require('./../db_connection');

const planInsert = (titel, description,url,cb) => {
  const sql = {
    text: 'INSERT INTO plans(title, description,link) VALUES($1,$2,$3) RETURNING *',
    values: [titel, description,url],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};

const reportInsert = (titel, description,link,cb) => {
  const sql = {
    text: 'INSERT INTO reports(title, description,link) VALUES($1,$2,$3) RETURNING * ',
    values: [titel, description,link],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};
const generalizationInsert = (titel, description,url,cb) => {
  const sql = {
    text: 'INSERT INTO generalization(title, description,link) VALUES($1,$2,$3) RETURNING *',
    values: [titel, description,url],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};

const activitiesInsert = (valueTitelOut, valueDescriptionOut,valueTitelIn,valueDescriptionIn,url,cb) => {
  const sql = {
    text: 'INSERT INTO activity(out_title, out_description,received_title,received_description,link) VALUES($1,$2,$3,$4,$5)RETURNING * ',
    values: [valueTitelOut, valueDescriptionOut,valueTitelIn,valueDescriptionIn,url],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};

const projectInsert = (titel, description,link,cb) => {
  const sql = {
    text: 'INSERT INTO achievements(title, description,link) VALUES($1,$2,$3) RETURNING *',
    values: [titel, description,link],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};
const advertisingInsert = (titel, description,link,cb) => {
  const sql = {
    text: 'INSERT INTO advertising(title, description,link) VALUES($1,$2,$3) RETURNING * ',
    values: [titel, description,link],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};

const  pudjetInsert= (pudjetSchool, pudjetWork,cb) => {
  const sql = {
    text: 'INSERT INTO budget(title, description) VALUES($1,$2) RETURNING *',
    values: [pudjetSchool, pudjetWork],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};
const  fileInsert= (link,cb) => {
  const sql = {
    text: 'INSERT INTO fileuplode(link) VALUES($1) RETURNING *',
    values: [link],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  

      
      cb(null, res.rows);
    }
  });
};



module.exports = {planInsert,reportInsert,generalizationInsert ,activitiesInsert,projectInsert,advertisingInsert,pudjetInsert,fileInsert} ;
