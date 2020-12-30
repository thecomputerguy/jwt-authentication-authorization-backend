const nodemailer = require("nodemailer");
//import config from "../config.js";

const defaultEmailFrom = process.env.EMAIL_FROM;

const smtpOptions = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
};

async function sendMail({ to, subject, html, from = defaultEmailFrom }) {
  const transporter = nodemailer.createTransport(smtpOptions);
  await transporter.sendMail({ from, to, subject, html });
}

module.exports = sendMail;
