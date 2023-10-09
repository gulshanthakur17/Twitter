const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect('mongodb://localhost/twitter');

}

module.exports = connect;