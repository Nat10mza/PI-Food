const { Router } = require("express");

const { getRecipesApi, getAllRec } = require("../controllers/recipes");

const router = Router();

router.get("/", async (req, res) => {
  const rec = await getAllRec();
  res.status(200).send(rec);
});

module.exports = router;
