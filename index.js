import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/.well-known/pki-validation/', express.static(path.join(__dirname, './.well-known/pki-validation')));

app.listen(80);