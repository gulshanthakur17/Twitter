import express from 'express';
import { connect } from './config/databse.js';


const app = express();

import service from './services/tweet-service.js'


app.listen(4000, async () => {
    console.log('Server Started');
    await connect();
    console.log('MongoDb Connected');


    let ser = new service();
    await ser.create({
        content: 'Done with #Code'
    })

});