import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';
import userRoutes from './routes/user.routes';

const app = express();

//parse body params and attach them to the req.body

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use(compress());
//secure apps by setting various http headers
app.use(helmet());
app.use(cors());

app.use('/', userRoutes);

app.get('/', (req,res) => {
    res.status(200).send(Template());
});

app.use((err,req,res,next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message});
    } else if (err) {
        res.status(400).json({"error" : err.name + ": " + err.message});
        console.log(err);
    }
});




export default app