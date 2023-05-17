import axios from "axios";
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

export function filterDiets(diets) {
  return function (dispatch) {
    diets = diets.toLowerCase();
    return dispatch({
      type: FILTER_DIETS,
      payload: diets,
    });
  };
}

export function sortAlphabetical(order) {
  return function (dispatch) {
    order = order.toLowerCase();
    return dispatch({
      type: SORT_BY_ALPHABETICAL,
      payload: order,
    });
  };
}

export function sortScore(order) {
  return function (dispatch) {
    return dispatch({
      type: SORT_BY_SCORE,
      payload: order,
    });
  };
}

export function setPage(num) {
  return function (dispatch) {
    return dispatch({
      type: SET_PAGE,
      payload: num,
    });
  };
}
