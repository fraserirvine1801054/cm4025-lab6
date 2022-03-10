import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';

const https = require('https');
const fs = require('fs');

//connection URL
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { dbName: "users" });
mongoose.connection.on('error', err => {
    throw new Error(`unable to connect to database: ${config.mongoUri}` + err);
});


if (config.isHttps === "true") {

    https.createServer(
        {
            key: fs.readFileSync(config.keyPath),
            cert: fs.readFileSync(config.certPath),
        },
        app
    )
        .listen(config.port, (err) => {
            console.info('Database is at %s.', config.mongoUri);
            if (err) {
                console.log(err);
            }
            console.info('Https Server started on port %s.', config.port);
        });

} else {
    app.listen(config.port, (err) => {
        console.info('Database is at %s.', config.mongoUri);
        if (err) {
            console.log(err);
        }
        console.info('Server started on port %s.', config.port);
    });
}





