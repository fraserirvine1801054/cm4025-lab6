import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

const { MongoClient } = require("mongodb");

const uri = config.mongoUri;

const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Establish and verify connection
        await client.db("admin").command({ ping: 1 });
        console.log("connected successfully to the server");
    } finally {
        // Ensures that the client will close when you finish/errror
        await client.close();
    }
}

run().catch(console.dir);

//connection URL

/*
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {dbName: "users"});
mongoose.connection.on('error', err => {
    throw new Error(`unable to connect to database: ${config.mongoUri}` + err);
});
*/
app.listen(config.port, (err) => {
    console.info('Database is at %s.', config.mongoUri);
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', config.port);
});