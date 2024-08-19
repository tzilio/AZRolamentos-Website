const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  // Validar o formato do e-mail (pode ser feito de maneira mais robusta)
  if (!isValidEmail(email)) {
    return res.status(400).send('E-mail inválido');
  }

  // Armazenar o e-mail em um arquivo de texto
  fs.appendFile('subscribed_emails.txt', `${email}\n`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao armazenar o e-mail');
    }

    console.log(`E-mail ${email} armazenado com sucesso.`);
    res.status(200).send('E-mail cadastrado com sucesso');
  });
});

// Função de validação de e-mail simples
function isValidEmail(email) {
  // Pode ser implementada de maneira mais robusta
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
