const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
const { getAllRec } = require("./recipes");

async function allDiets() {
  let diets = [];
  const recipes = await getAllRec();

  for (let i = 0; i < recipes.length; i++) {
    const e = recipes[i];

    if (diets.includes(e.dietTypes)) continue;
    diets.push(...e.dietTypes);
  }

  let arrSinRepetidos = diets.filter((elem, index) => {
    return diets.indexOf(elem) === index;
  });

  return arrSinRepetidos;
}

// allDiets().then((v) => console.log(v));

module.exports = {
  allDiets,
};
