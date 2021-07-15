import express from 'express';
import bodyParser from 'body-parser';
import home from './api/home';
import config from '../config';
import cors from 'cors';
const app = express();
app.use(cors());
const port = config.port;
console.log("*************");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/api/home', home);
app.listen(port, function () {
    console.log(port);
})
