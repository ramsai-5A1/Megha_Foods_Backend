const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { PORT, MONGODB_URL } = require('./config/ServerConfig');

const app = express()
app.use(bodyParser.json());

app.get('/basic', (req, res) => {
    res.status(200).json({
        status: 'okk'
    })
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});

const connectToMongoDb = () => {
    const mongodbUrl = MONGODB_URL;
    const client = new MongoClient(mongodbUrl);
    
    client.connect()
        .then(() => {
            console.log("Connected to MONGODB successfully");
        })
        .catch((err) => {
            console.error("Error while connecting to mongodb", err);
        });

    process.on('SIGINT', () => {
        client.close();
        process.exit();
    });
}
connectToMongoDb();