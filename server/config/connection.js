const mongoose = require('mongoose');
require('dotenv').config()

MONGODB_URI = `mongodb+srv://kaileymorter:${process.env.DB_PASS}@cluster0.hq8r9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    }
);

module.exports = mongoose.connection;
