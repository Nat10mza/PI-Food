const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
const API_KEY = "2636f9c9d6084ea8832b979e9a7ab117 ";

async function getRecipesApi() {
  const recipes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=2636f9c9d6084ea8832b979e9a7ab117&number=100&addRecipeInformation=true`
  );

  const apiInfo = recipes.data.results.map((e) => {
    return {
      id: e.id,
      image: e.image,
      name: e.title,
      dietTypes: e.diets,
      summary: e.summary,
      score: e.spoonacularScore,
      healthScore: e.healthScore,
      dishTypes: e.dishTypes,
      steps: e.analyzedInstructions[0]?.steps.map((e) => {
        return {
          number: e.number,
          step: e.step,
        };
      }),
    };
  });

  return apiInfo;
}

// const getDbInfo = async () => {
//   return await Recipe.findAll({
//     include: {
//       model: Diet,
//       attributes: ["name"],
//       through: {
//         attributes: [],
//       },
//     },
//   });
// };

const getAllRec = async () => {
  const api = await getRecipesApi();
  //   const db = await getDbInfo();
  return [...api];
};
// getRecipesApi().then((v) => console.log(v));

module.exports = {
  getRecipesApi,
  getAllRec,
};
