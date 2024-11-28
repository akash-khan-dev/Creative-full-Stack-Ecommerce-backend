const nodemailer = require("nodemailer");

const sendEmailFrontend = async (email, OTP, subject) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.SEND_MEAIL,
      pass: process.env.SEND_MEAIL_PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: "akash910971@gmail.com", // sender address
    to: email, // list of receivers
    subject: `${subject}`, // Subject line
    html: `<p>${OTP}</p>`, // html body
  });
};
module.exports = sendEmailFrontend;
