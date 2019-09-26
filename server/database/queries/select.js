const connection = require('./../db_connection');


const planSelect = (cb) => {
  const sql = {
    text: 'SELECT * from  plans',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};

const radioSelect = (id,cb) => {
  const sql = {
    text: 'SELECT * from  radio where nosection = $1',
    values:[id]
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};
const radioSelectName = (cb) => {
  const sql = {
    text: 'SELECT * from  nameteach',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};
const reportsSelect = (cb) => {
  const sql = {
    text: 'SELECT * from  reports',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};
const generalSelect = (cb) => {
  const sql = {
    text: 'SELECT * from  generalization',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};
const achievementsSelect = (cb) => {
  const sql = {
    text: 'SELECT * from achievements',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};
const advertisingSelect = (cb) => {
  const sql = {
    text: 'SELECT * from  advertising',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};
const budgetSelect = (cb) => {
  const sql = {
    text: 'SELECT * from  budget',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};

const activitOutSelect = (cb) => {
  const sql = {
    text: 'SELECT * from  activity',
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};
const activitInSelect = (cb) => {
  const sql = {
    text: 'SELECT * from activities',
  };
  connection.query(sql, (err, res) => {
    if (err) cb(err);
    else {  
      cb(null, res.rows);
    }
  });
};

const fileSelect = (cb) => {
  const sql = {
    text: 'SELECT * from  fileuplode',
  };
  connection.query(sql, (err, res) => {
    if (err) {
      console.log("err DB",err);
      
      cb(err);
    }
    else {  
      cb(null, res.rows);
    }
  });
};

module.exports = {planSelect,radioSelect,reportsSelect,generalSelect ,achievementsSelect ,advertisingSelect,budgetSelect,radioSelectName ,activitOutSelect , activitInSelect ,fileSelect }