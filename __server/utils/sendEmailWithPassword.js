const nodemailer = require('nodemailer');
const sendError = require('./sendError');

const sendEmailWithPassword = (user, email, res) => {
  const { username, password } = user;
  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.PANEL_EMAIL_LOGIN,
      pass: process.env.PANEL_EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: `"Blog | div-craft.com" <${process.env.PANEL_EMAIL_LOGIN}>`,
    to: email,
    subject: 'Przypomnienie hasła',
    html: `
      <h2>Witaj,</h2>
      <p>
      Twoje dane logowania to:
        <ul>
          <li>nazwa użytkownika: ${username}</li>
          <li>hasło: ${password}</li>
        </ul>
      </p>
      <p>
        Ta wiadomość została wygenerowana automatycznie.
      </p>
      `,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) sendError(err, res);
    res.status(200).send({
      describe: `Email has been sent to ${email}.`,
      info,
    });
  });
};

module.exports = sendEmailWithPassword;
