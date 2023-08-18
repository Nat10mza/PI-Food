import {
  ERROR_GET_DIETS,
  ERROR_GET_RECIPES,
  FILTER_DIETS,
  GET_DIETS,
  GET_RECIPES,
  RESET_RECIPES,
  SEARCH_RECIPE,
  SET_LOADING,
  SET_PAGE,
  SORT_BY_ALPHABETICAL,
  SORT_BY_SCORE,
} from "./typeactions";

export const initialState = {
  recipes: [],
  allrecipes: [],
  dietTypes: [],
  loading: false,
  page: 1,
  error: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        allrecipes: action.payload,
        error: null,
        loading: false,
      };
    case ERROR_GET_RECIPES: {
      return {
        ...state,
        recipes: [],
        allrecipes: [], // Vaciar las recetas en caso de error
        error: action.error,
        loading: false,
      };
    }
    case GET_DIETS:
      return {
        ...state,
        dietTypes: action.payload,
        error: null,
        loading: false,
      };
    case ERROR_GET_DIETS: {
      return {
        ...state,
        dietTypes: [],
        // Vaciar las dietas en caso de error
        error: action.error,
        loading: false,
      };
    }
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FILTER_DIETS:
      const allRecipes = state.allrecipes;
      const filteredByDietType = allRecipes.filter((r) =>
        r.dietTypes?.some((d) => d.toLowerCase() === action.payload)
      );
      if (action.payload === "all diets")
        return {
          ...state,
          recipes: state.allrecipes,
        };
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
