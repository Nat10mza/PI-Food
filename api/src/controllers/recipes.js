const axios = require("axios");
const db = require("../db");
const { Diet, Recipe } = require("../db");
const { API_KEY } = process.env;

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

  let dietsWithComa = [];

  for (let i = 0; i < info.data.diets.length; i++) {
    const diet = info.data.diets[i];
    console.log(i);
    console.log(diet);
    dietsWithComa.push(diet);
    if (i === info.data.diets.length - 1) {
      dietsWithComa.push(".");
      break;
    }
    dietsWithComa.push(", ");
  }

  return {
    image: info.data.image,
    name: info.data.title,
    dietTypes: dietsWithComa,
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
// getApiRecId().then((v) => console.log(v.dietTypes));

module.exports = {
  getRecipesApi,
  getAllRec,
  getApiRecId,
  getDbById,
};
