import axios from "axios";
import { GET_DIETS, GET_RECIPES } from "./typeactions";

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
