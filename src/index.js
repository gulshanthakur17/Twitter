const express = require('express');
const connect = require('./config/databse');

const TweetService = require('./services/tweet-service');

const app = express();


app.listen(4000, async () => {
    console.log('Server Started');
    await connect();
    console.log('MongoDb Connected');

    let service = new TweetService();
    const tweet = await service.create({
        content: 'is #working working #twitter'
    });
    console.log(tweet);

});