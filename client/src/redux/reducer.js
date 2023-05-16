import {
  GET_DIETS,
  GET_RECIPES,
  RESET_RECIPES,
  SEARCH_RECIPE,
} from "./typeactions";

export const initialState = {
  recipes: [],
  allrecipes: [],
  dietTypes: [],
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
    default:
      return state;
  }
}

export default rootReducer;
