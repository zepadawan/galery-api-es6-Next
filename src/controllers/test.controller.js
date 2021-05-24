 import path from 'path';
 import fs from 'fs';
 import scp from 'node-scp';

 global.__dirname = process.cwd();
 console.log('__dirname = ' + __dirname);
 console.log('__dirname = ' + __dirname);

 export function renameFile() {


     const oldPath = path.join(__dirname, '/uploads', 'toto.txt');
     //     const newPath = path.join(__dirname, '/uploads/other', 'titi.txt');
     const newPath = path.join('http://www.christianbialy.com/uploads', 'titi.txt');

     fs.copyFile(oldPath, newPath, (err => {
         if (err) {
             console.log('ERROR ' + err);
         } else {
             console.log('Copie OK!');
         }
     }))
 }

 var remote_server = {
         host: '178.170.8.35', //remote host ip 
         port: 22, //port used for scp 
         username: 'root', //username to authenticate
         password: '_Zepadawan123', //password to authenticate
     }
     // send_file_using_promise(local_file_path, destination_file_path);

 export function send_file_using_promise(local_file_path, destination_file_path) {
     local_file_path = path.join(__dirname, '/uploads/other', 'titi.txt');
     console.log(local_file_path);
     destination_file_path = '/var/www/sites/cbialy/site/uploads/test.txt';
     console.log(remote_server);
     scp(remote_server)
         .then(client => {
             client.uploadFile(local_file_path, destination_file_path)
                 .then(response => {
                     client.close()
                     console.log('copie OK');
                 })
                 .catch(error => {})
         })
         .catch(e => console.log(e));
     return "OK";

 }

 export default {}