const express = require(`express`);
const db = require(`./config/database`);

const app = express();

const createpatientTable = `create table patients(
patient_id int primary key auto_increment, 
first_name varchar (50),
last_name varchar(50), 
email varchar(150), 
password varchar(50), 
phone varchar(50),
date_of_birth date, 
gender varchar(50), 
address varchar(200)
)`;

// this route will create patients table in your database the moment you visit it
app.get(`/patient`, (req, res) => {
  db.query(createpatientTable, (err, result) => {
    if (err) {
      console.log(err, `Unable to created table`);
    } else {
      console.log(`Table Created Successfully`);
      res.send(`Table Created Successfully`);
    }
  });
});

const createdoctorTable = `create table doctors(
doctor_id int primary key auto_increment, 
firstname varchar(50), 
lastname varchar(50), 
specialization varchar(150), 
email varchar(150), 
phone varchar(50), 
schedule varchar(50)
)`;
// this route will create doctors table in your database the moment you visit it
app.get(`/doctors`, (req, res) => {
  db.query(createdoctorTable, (err, result) => {
    if (err) {
      console.log(err, `Unable to created table`);
    } else {
      console.log(`Table Created Successfully`);
      res.send(`Table Created Successfully`);
    }
  });
});

app.listen();
