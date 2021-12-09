const express = require('express');
const APP = express();
const PATH = require('path');

APP.set('port', 3000);

APP.use(express.static(PATH.join(__dirname, 'app')));

APP.listen(APP.get('port'), () => {
    console.log(`Aplicacion corriendo en el puerto ${APP.get('port')}`);
    console.log(__dirname);
});