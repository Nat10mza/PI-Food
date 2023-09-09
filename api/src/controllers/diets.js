const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
const { getAllRec } = require("./recipes");

async function allDiets() {
  let diets = [];
  const recipes = await getAllRec();

  for (let i = 0; i < recipes.length; i++) {
    const arrayDiets = recipes[i].dietTypes;

    for (let j = 0; j < arrayDiets.length; j++) {
      let diet = arrayDiets[j];
      diet = diet.charAt(0).toUpperCase() + diet.slice(1); //capitalizes the first letter
      if (diets.includes(diet)) continue;
      diets.push(diet);
    }
  }
  return diets;
}

// allDiets().then((v) => console.log(v));

module.exports = {
  allDiets,
};
