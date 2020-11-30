const nodemailer = require('nodemailer');

const sendEmailWithPassword = (user, email) => {
  const { username, password } = user;
  const transporter = nodemailer.createTransport({
    service: 'ovh',
    auth: {
      user: process.env.PANEL_EMAIL_LOGIN,
      pass: process.env.PANEL_EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.PANEL_EMAIL_LOGIN,
    to: email,
    subject: 'Przypomnienie hasła | div-craft blog',
    text: `
      Witaj,

      Twoje dane logowania to:
         nazwa użytkownika: ${username}
         hasło: ${password}

      Ta wiadomość została wygenerowana automatycznie.
      `,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    return info;
  });
};

module.exports = sendEmailWithPassword;
