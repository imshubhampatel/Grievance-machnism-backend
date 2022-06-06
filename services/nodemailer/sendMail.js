const nodemailer = require("nodemailer");

function sendMail(email, subject, desc) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        type: process.env.TYPE,
        user: process.env.MAIL_SENDER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
      },
    });

    // let transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     type: "OAuth2",
    //     user: "shubhampatel2024@gmail.com",
    //     clientId: process.env.CLIENT_ID,
    //     clientSecret: process.env.CLIENT_SECRET,
    //     refreshToken: process.env.REFRESH_TOKEN,
    //     accessToken: process.env.ACCESS_TOKEN,
    //     expires: 1484314697598,
    //   },
    // });

    console.log(transporter);

    let mailOptions = {
      from: `Team Grievance BTIRT 🎫 <shubhampatel2024@gmail.com>`,
      to: email,
      subject: subject,
      html: desc,
    };

    transporter.sendMail(mailOptions, function (err) {
      if (err) {
        console.log(err);
        reject({ success: false, error: err });
      }
      resolve({ success: true });
    });
  });
}

module.exports = { sendMail };
