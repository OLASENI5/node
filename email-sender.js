let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ajayi@gmail.com',
    pass: 't65P+#xx6zsR'
  }
});

let mailOptions = {
  from: 'oladoyin@gmail.com',
  to: 'oladoyin@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Stay jiggy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});