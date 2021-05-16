import express from 'express';
import bodyparrser from 'body-parser';
import cors from 'cors';
import config from './src/configs/config.js';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import _ from 'lodash';

const app = express();
app.use(cors());
app.use(bodyparrser.json());
app.use(express.json());
app.use(cors());
app.use(express.static('./assets'));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ createParentPath: true }));
app.use(express.static('uploads'));
// // 
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, PATCH, OPTIONS, TRACE');
    next();
})


global.__dirname = process.cwd();
console.log('__dirname = ' + __dirname);


// uploads
import uploadService from './src/services/upload.service.js';
app.use('/upload', uploadService);


import routes from './src/routes/routes.js';
app.use('/', routes);


app.get('/', (req, res) => res.send('Hello my World'));
let port = config.server.portServer || 4000;
//create a server
var server = app.listen(port, function() {
    var host = config.server.portServer;
    var port = config.server.host;
    console.log(`App listening at http:// ${port} : ${host} `);
});