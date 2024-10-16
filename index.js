const express = require("express");
const shortId = require("shortid")

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/.well-known", express.static('.well-known'))

// Defina a URL de redirecionamento
const redirectTo = "http://localhost:8081/login"; // Substitua pela URL desejada
// Middleware para redirecionar todas as requisições
app.get('/redirect', (req, res) => {
  console.log(req.params)
  res.redirect(redirectTo);
  console.log("com.carlos_cacho.invetoryifmsppv2://scanner");
});

app.listen(port, () => {
  console.log("com.carlos_cacho.invetoryifmsppv2://scanner");
  console.log(`Sandbox listening on port ${port}`);
});
