import express from 'express';
import dirpath from 'path';
import fileUpload from 'express-fileupload';
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
        var image = req.files.sampleFile;
        console.log(image);
        // res.json({
        //     message: 'trouvé',
        //     image: image.name
        // });

        let sampleFile = req.files.sampleFile;
        const uploadPath = dirpath.join(__dirname, "/uploads", sampleFile.name);
        console.log(uploadPath);
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


//             //     //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
//             //     let avatar = req.files.avatar;

//             //     //Use the mv() method to place the file in upload directory (i.e. "uploads")
//             //     avatar.mv('./uploads/' + avatar.name);

//             //     //send response
//             //     res.send({
//             //         status: true,
//             //         message: 'File is uploaded',
//             //         data: {
//             //             name: avatar.name,
//             //             mimetype: avatar.mimetype,
//             //             size: avatar.size
//             //         }
//             //     });
//             // }
//         } catch (err) {
//             res.status(500).send(err);
//         }
//     });