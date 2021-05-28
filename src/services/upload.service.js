import express from 'express';
import dirpath from 'path';
import fileUpload from 'express-fileupload';
import fs from 'fs';
import { getCategoryById } from './oeuvre_categorie.service.js';

const app = express();
app.use(fileUpload({ createParentPath: true }));

export async function uploadService(req, res, next) {
  if (!req.files) {
    console.log('no req.files');
    res.send({
      status: false,
      message: 'No file uploaded'
    });
    return;
  } else {

    let sampleFile = req.files.sampleFile;
    // const uploadPath = dirpath.join(__dirname, "/uploads/", sampleFile.name);
    const uploadPath = dirpath.join(__dirname, "/public/images/tableaux", sampleFile.name);
    sampleFile.mv(uploadPath);
    res.send({
      status: true,
      message: 'File is uploaded',
      data: {
        name: sampleFile.name,
        mimetype: sampleFile.mimetype,
        size: sampleFile.size
      }
    });

  }
}




export default (uploadService);
