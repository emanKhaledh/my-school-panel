const connection = require('./../db_connection');

const radioInsert = (titel, description,url,nosection,cb) => {
  const sql = {
    text: 'INSERT INTO radio(title, description,link,nosection) VALUES($1,$2,$3,$4) RETURNING *',
    values: [titel, description,url,nosection],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};




const radioInsertName = (TeacName,startDate,url,cb) => {
  const sql = {
    text: 'INSERT INTO nameteach(name, date,link) VALUES($1,$2,$3) RETURNING *',
    values: [TeacName,startDate,url],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};

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
// ,valueTitelIn,valueDescriptionIn

const activitiesOutInsert = (valueTitelOut, valueDescriptionOut,url,cb) => {
  const sql = {
    text: 'INSERT INTO activity(title, description,link) VALUES($1,$2,$3) RETURNING * ',
    values: [valueTitelOut, valueDescriptionOut,url],
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};

const activitiesInInsert = (valueTitelIn,valueDescriptionIn,url,cb) => {
  const sql = {
    text: 'INSERT INTO activities(title, description,link) VALUES($1,$2,$3) RETURNING * ',
    values: [valueTitelIn,valueDescriptionIn,url],
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

const  pudjetInsert= (valueTitelOut, valueDescriptionOut,valueTitelIn,valueDescriptionIn,url,cb) => {

  const sql = {
    text: 'INSERT INTO  budget(out_title, out_description,received_title,received_description,link) VALUES($1,$2,$3,$4,$5)RETURNING * ',
    values: [valueTitelOut, valueDescriptionOut,valueTitelIn,valueDescriptionIn,url],
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



module.exports = {planInsert,reportInsert,generalizationInsert ,projectInsert,activitiesOutInsert,activitiesInInsert ,pudjetInsert,fileInsert,radioInsert,radioInsertName ,advertisingInsert} ;

