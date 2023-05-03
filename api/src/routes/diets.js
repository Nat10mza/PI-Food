const { Router } = require("express");
const { allDiets } = require("../controllers/diets");
const { Diet, Recipe } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/", async (req, res) => {
  const apiDiets = await allDiets();

  apiDiets.map((e) => {
    Diet.findOrCreate({
      where: { name: e },
    });
  });

  const diets = await Diet.findAll();

  res.json(diets);
});

module.exports = router;
