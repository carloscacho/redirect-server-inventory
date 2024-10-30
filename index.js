const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/callback', (req, res) => {
  // Extrai os parâmetros token e date da URL
  const { access_token, scope, expires_in } = req.query;

  // Monta a URL para redirecionar com o parâmetro adicional "close=true"
  const redirectUrl = `/redirect?access_token=${access_token}&scope=${scope}&expires_in=${expires_in}&close=true`;

  // Realiza o redirecionamento
  res.redirect(redirectUrl);
});

app.get('/redirect', (req, res) => {
  // Aqui você pode processar a requisição após o redirecionamento
  res.send(`URL redirecionada com sucesso com os parâmetros: ${JSON.stringify(req.query)}`);
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
