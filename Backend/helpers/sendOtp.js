const nodemailer = require("nodemailer");
const { customOtpGen } = require("otp-gen-agent");
const sendOtp = async (email) => {
  const OTP = await customOtpGen({ length: 5 });
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
    html: `<b>Your OTP is ${OTP}</b>`, // html body
  });
};
module.exports = sendOtp;
