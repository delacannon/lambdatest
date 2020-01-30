const nodemailer = require("nodemailer");

exports.handler = function(event, context, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
    tls: { ciphers: "SSLv3" }
  });

  console.log(event.body);

  transporter.sendMail(
    {
      from: process.env.EMAIL,
      to: "amat.alvar@gmail.com",
      subject: "test lambda",
      text: "Hola test from netlify lambda"
    },
    function(error, info) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: "Ok"
        });
      }
    }
  );
};
