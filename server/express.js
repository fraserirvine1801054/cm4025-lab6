import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import Template from './../template';

const app = express();

app.get('/', (req,res) => {
    res.status(200).send(Template());
});




//parse body params and attach them to the req.body

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());
app.use(compress());
//secure apps by setting various http headers
app.use(helmet());
app.use(cors());

export default app