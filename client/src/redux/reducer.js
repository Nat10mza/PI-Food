import {
  FILTER_DIETS,
  GET_DIETS,
  GET_RECIPES,
  RESET_RECIPES,
  SEARCH_RECIPE,
  SET_PAGE,
  SORT_BY_ALPHABETICAL,
  SORT_BY_SCORE,
} from "./typeactions";

export const initialState = {
  recipes: [],
  allrecipes: [],
  dietTypes: [],
  page: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allrecipes: action.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        dietTypes: action.payload,
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };
    case RESET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case FILTER_DIETS:
      const allRecipes = state.allrecipes;
      const filteredByDietType = allRecipes.filter((r) =>
        r.dietTypes?.some((d) => d.toLowerCase() === action.payload)
      );
      return {
        ...state,
        recipes: filteredByDietType,
      };
    case SORT_BY_ALPHABETICAL:
      let sortedRecipes = state.recipes;
      sortedRecipes =
        action.payload === "atoz"
          ? state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });
      return {
        ...state,
        recipes: [...sortedRecipes],
      };
    case SORT_BY_SCORE:
      let sortedRecipesByScore = state.recipes;
      sortedRecipesByScore =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore < b.healthScore) return 1;
              if (a.healthScore > b.healthScore) return -1;
              return 0;
            });
      return {
        ...state,
        recipes: [...sortedRecipesByScore],
      };
    default:
      return state;
  }
}

export default rootReducer;
