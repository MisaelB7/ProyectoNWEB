const express = require('express');
const APP = express();
const PATH = require('path');
const mysql = require('mysql');


APP.set('port', 3000);

APP.use(express.static(PATH.join(__dirname, 'app')));

APP.listen(APP.get('port'), () => {
    console.log(`Aplicacion corriendo en el puerto ${APP.get('port')}`);
    console.log(__dirname);
});

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Cisco0105',
    database: 'FlaxNam'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("IT IS Connected");
  });