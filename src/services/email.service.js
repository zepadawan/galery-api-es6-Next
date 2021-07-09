
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
import config from '../configs/config.js';

export async function sendmail(req, res, next) {

  console.log(req.body);
  let sender = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'zepadawan@gmail.com',
      pass: '_Marinette456',
      clientId: "269483864024-rpm3q0ldcj2rekoefo5ju1pa0c1k50k4.apps.googleusercontent.com",
      clientSecret: "bpI1cljZxOzsiTTijR55_k6G",
      refreshToken: "1//04y9MKOWgVR3GCgYIARAAGAQSNwF-L9IrvH3NdMHlyPAxXnOFfSToDlOVtLQRrvGroL4r9X1BFmqo3Dfr9X-hWP_udHMKyaqhnIU",
      accessToken: "ya29.a0AfH6SMDgE3bgsF27UCjyVfN0zN-3RVNtnPQ8ayzb1gJRSHagpzXPMCeo2Vcas4VyBM0lBvf43A1PIdSk3LDXXpL4UcGWYc0GP2n8zqJTv5bys0n7TBFxmxNewZDPcvkyTg3B8Of2dOlb32obDoiKVTHVrok0",
      scope: "https://mail.google.com/",
      token_type: "Bearer",
      expires_in: 3599,
    },
    tls: { rejectUnauthorized: false },
  });

  if (!sender.emailTo) {
    sender.emailTo = 'zepadawan@gmail.com';
  }

  const mailOptions = {
    from: sender.email,
    to: sender.emailTo,
    subject: '<h4>' + sender.subject + '</h4>',
    text: sender.message,
    html: "<p>" + sender.message + "</p>"
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions)
      .then(() => res.send({
        status: 200,
        message: 'send Mail OK !'
      }))
      .catch((err) => res.send({
        status: 400,
        message: 'error : send Mail KO !' + err.message,
      }));

  })

}


export default (sendmail)