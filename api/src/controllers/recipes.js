const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
const API_KEY = "c1f613ae99f946db8e30e237481bfaea";

async function getRecipesApi() {
  const recipes = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
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

const getDbInfo = async () => {
  let dbRecipes = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  let changedDBRecipes = await dbRecipes.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      summary: e.summary,
      healthScore: e.healthScore,
      stepByStep: e.stepByStep,
      dietTypes: e.diets.map((d) => {
        return (d = d.name);
      }),
    };
  });
  return changedDBRecipes;
};

const getAllRec = async () => {
  const api = await getRecipesApi();
  const db = await getDbInfo();
  return [...api, ...db];
};

const getApiRecId = async (id) => {
  const info = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );
  return {
    image: info.data.image,
    name: info.data.title,
    dietTypes: info.data.diets,
    summary: info.data.summary,
    score: info.data.spoonacularScore,
    healthScore: info.data.healthScore,
    steps: info.data.analyzedInstructions[0]?.steps.map((e) => {
      return {
        number: e.number,
        step: e.step,
      };
    }),
  };
};

const getDbById = async (id) => {
  return await Recipe.findByPk(id, {
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};
// getRecipesApi().then((v) => console.log(v));

module.exports = {
  getRecipesApi,
  getAllRec,
  getApiRecId,
  getDbById,
};
