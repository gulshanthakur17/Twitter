const express = require('express');
const connect = require('./config/databse');

const app = express();

const Tweet = require('./models/tweet');


app.listen(4000, async () => {
    console.log('Server Started');

    await connect();
    console.log('MongoDb Connected');

    const tweets = await Tweet.find({
        content: ["tweet","12345678"]
    });

    console.log(tweets);

});