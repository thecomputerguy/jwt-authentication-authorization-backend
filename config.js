const config = {
  connectionString: process.env.DB_CONNECTION_STRING,
  secret: process.env.SECRET,
  emailFrom: process.env.EMAIL_FROM,
  smtpOptions: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
};

module.exports = config;
