import express from "express";
const app = express();
const port = 3000;

// Defina a URL de redirecionamento
const redirectTo = "com.carlos_cacho.invetoryifmsppv2://scanner"; // Substitua pela URL desejada
// Middleware para redirecionar todas as requisições
app.use((req, res) => {
  res.redirect(301, redirectTo);
  console.log("com.carlos_cacho.invetoryifmsppv2://scanner");
});

app.listen(port, () => {
  console.log("com.carlos_cacho.invetoryifmsppv2://scanner");
  console.log(`Sandbox listening on port ${port}`);
});
