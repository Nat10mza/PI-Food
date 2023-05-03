const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/", async (req, res) => {
  res.json("hola");
});

module.exports = router;
