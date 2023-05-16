import axios from "axios";
import {
  GET_DIETS,
  GET_RECIPES,
  RESET_RECIPES,
  SEARCH_RECIPE,
} from "./typeactions";

export function getRecipes() {
  return async function (dispatch) {
    let api = await axios.get(`http://localhost:3001/recipes`);
    return dispatch({
      type: GET_RECIPES,
      payload: api.data,
    });
  };
}

export function getDiets() {
  return async function (dispatch) {
    let api = await axios.get(`http://localhost:3001/diets`);
    return dispatch({
      type: GET_DIETS,
      payload: api.data,
    });
  };
}

export function searchRecipes(name, recipes) {
  return function (dispatch) {
    let filteredRec = recipes.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    return dispatch({
      type: SEARCH_RECIPE,
      payload: filteredRec,
    });
  };
}

export function resetRecipes(recipes) {
  return function (dispatch) {
    return dispatch({
      type: RESET_RECIPES,
      payload: recipes,
    });
  };
}
