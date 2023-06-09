const { Router } = require("express");
const { Diet, Recipe } = require("../db");
const { getAllRec, getApiRecId, getDbById } = require("../controllers/recipes");

const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  // si pasamos name por query, filtra por este name
  try {
    if (name) {
      const allrec = await getAllRec();
      let recipeByName = allrec.filter((e) =>
        e.name.toLowerCase().includes(name.toString().toLowerCase())
      );
      return res.status(200).send(recipeByName);
    }
    const rec = await getAllRec();
    res.status(200).send(rec);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:idRec", async (req, res) => {
  let { idRec } = req.params;
  try {
    let response = null;
    if (idRec.length > 8) {
      response = await getDbById(idRec);
      return res.status(200).send(response);
    }
    response = await getApiRecId(idRec);
    res.status(200).send(response);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, image, summary, healthScore, stepByStep, dietTypes } =
      req.body;
    const created = await Recipe.create({
      name: name,
      image: image,
      summary: summary,
      healthScore: healthScore,
      stepByStep: stepByStep,
    });

    let dietTypesRecipeDb = await Diet.findAll({
      where: { name: dietTypes },
    });
    created.addDiet(dietTypesRecipeDb);
    res.status(200).send(created);
  } catch (err) {
    return res.send(err);
  }
});

module.exports = router;
