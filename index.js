const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/callback', (req, res) => {
  const accessToken = req.query.access_token;
  const scope = req.query.scope;
  const expiresIn = req.query.expires_in;

  // Verifica se os parâmetros necessários estão presentes
  if (accessToken && scope && expiresIn) {
    // Monta a URL para redirecionar com o parâmetro adicional "close=true"
    const redirectUrl = `/redirect?access_token=${accessToken}&scope=${scope}&expires_in=${expiresIn}&close=true`;

    // Redireciona para a URL com os parâmetros adicionais
    res.redirect(redirectUrl);
  } else {
    console.log(req.query)
    res.status(400).json(req.originalUrl);
    
  }
});

app.get('/redirect', (req, res) => {
  // Aqui você pode processar a requisição após o redirecionamento
  res.send(`URL redirecionada com sucesso com os parâmetros: ${JSON.stringify(req.query)}`);
});

app.listen(PORT, () => {
  console.log(`listening on PORT ${PORT}`);
});
