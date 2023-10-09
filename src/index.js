const express = require('express');
const connect = require('./config/databse');

const app = express();


app.listen(4000, async () => {
    console.log('Server Started');

    await connect();
    console.log('MongoDb Connected');


});