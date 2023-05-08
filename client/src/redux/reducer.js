import { GET_DIETS, GET_RECIPES } from "./typeactions";

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
    default:
      return state;
  }
}

export default rootReducer;
