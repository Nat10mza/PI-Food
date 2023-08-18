import axios from "axios";
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

export function getRecipes() {
  return async function (dispatch) {
    dispatch({ type: SET_LOADING }); // Cambiar loading a true
    return axios
      .get(`http://localhost:3001/recipes`)
      .then((response) => {
        dispatch({ type: GET_RECIPES, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          // Error de respuesta HTTP con código de estado no exitoso
          dispatch({ type: ERROR_GET_RECIPES, error: error.response.data });
        } else if (error.request) {
          // Error de solicitud sin respuesta del servidor
          dispatch({
            type: ERROR_GET_RECIPES,
            error: "Error connecting to server :(",
          });
        } else {
          // Otros errores
          dispatch({
            type: ERROR_GET_RECIPES,
            error: "Ocurrió un error desconocido",
          });
        }
      });
  };
}

export function getDiets() {
  return async function (dispatch) {
    dispatch({ type: SET_LOADING }); // Cambiar loading a true
    return axios
      .get(`http://localhost:3001/diets`)
      .then((response) => {
        dispatch({ type: GET_DIETS, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          // Error de respuesta HTTP con código de estado no exitoso
          dispatch({ type: ERROR_GET_DIETS, error: error.response.data });
        } else if (error.request) {
          // Error de solicitud sin respuesta del servidor
          dispatch({
            type: ERROR_GET_DIETS,
            error: "Error connecting to server :(",
          });
        } else {
          // Otros errores
          dispatch({
            type: ERROR_GET_RECIPES,
            error: "Ocurrió un error desconocido",
          });
        }
      });
  };
}

export function addRecipe(payload) {
  return async function (dispatch) {
    let api = await axios.post(`http://localhost:3001/recipes`, payload);
    return api.data;
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

export function setLoading(boolean) {
  return function (dispatch) {
    return dispatch({
      type: SET_LOADING,
      payload: boolean,
    });
  };
}
