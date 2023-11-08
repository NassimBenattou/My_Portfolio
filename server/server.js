const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.post('/envoyer-email', (req, res) => {
  const { name, email, message } = req.body;

  console.log(name)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nassim.benattou13@gmail.com',
      pass: 'cajl iyao rkpe voue',
    },
  });

  const mailOptions = {
    from: email,
    to: 'nassim.benattou13@gmail.com',
    subject: `Message de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Échec de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé : ' + info.response);
      res.status(200).send('E-mail envoyé avec succès');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
