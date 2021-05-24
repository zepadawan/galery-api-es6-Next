import express from 'express';
import bodyparrser from 'body-parser';
import cors from 'cors';
import config from './src/configs/config.js';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import https from 'https';
import fs from 'fs';
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

var port = normalizePort(process.env.PORT || '3000');

var host;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'dev') {
    host = config.server.host_dev
} else {
    host = config.server.host_prod
}

host = 'https://178.170.8.35';
console.log(host);


app.set('port', port);
var httpOptions = {
    key: fs.readFileSync("assets/privatekey.pem"),
    cert: fs.readFileSync("assets/certificate.pem")
}

var server = https.createServer(httpOptions, app);

server.listen(port);
server.on('listening', onListening);
console.log(`App listening at ${host}:${port} `);

app.get('/', (req, res) => res.send('Hello my World'));



// _helpers
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    //   debug('Listening on ' + bind);
}

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}