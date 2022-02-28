import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port %s.', config.port);
});

//connection URL

/**
 * make code read mongo URI from environment variables in AWS linux
 * 
 */

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {dbName: "users"});
mongoose.connection.on('error', err => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`);
})