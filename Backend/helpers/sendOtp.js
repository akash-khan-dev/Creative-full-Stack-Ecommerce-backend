const nodemailer = require("nodemailer");

const sendOtp = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: "ak6220336@gmail.com",
      pass: "klrr qyxq klga oein",
    },
  });
  const info = await transporter.sendMail({
    from: "akash910971@gmail.com", // sender address
    to: email, // list of receivers
    subject: "This is your Verification", // Subject line
    html: `<a href="http://localhost:5173/emailVerification/${token}">Click Here</a>`, // html body
  });
};
module.exports = sendOtp;
