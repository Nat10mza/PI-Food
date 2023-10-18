import axios from "axios";
import {
  ERROR_GET_DIETS,
  ERROR_GET_RECIPES,
  FILTER_DIETS,
  GET_DETAIL_DIET,
  GET_DIETS,
  GET_RECIPES,
  RESET_RECIPES,
  SEARCH_RECIPE,
  SET_LOADING,
  SET_PAGE,
  SORT_BY_ALPHABETICAL,
  SORT_BY_SCORE,
  LANDING_ANIMATION,
} from "./typeactions";

export function getRecipes() {
  return async function (dispatch) {
    dispatch({ type: SET_LOADING }); // Cambiar loading a true
    return axios
      .get(`/recipes`)
      .then((response) => {
        dispatch({ type: GET_RECIPES, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          // Error de respuesta HTTP con código de estado no exitoso
          dispatch({ type: ERROR_GET_RECIPES, error: error.response.data });
        } else if (error.request) {
          if (error.request.withCredentials === false)
            dispatch({
              type: ERROR_GET_RECIPES,
              error:
                "we no longer have api daily points, leave a message to Nico :)",
            });
          // Error de solicitud sin respuesta del servidor
          dispatch({
            type: ERROR_GET_RECIPES,
            error:
              "An error has occured, leave a message to Nico and try later :)",
          });
        } else {
          // Otros errores
          dispatch({
            type: ERROR_GET_RECIPES,
            error: "Unknokn error",
          });
        }
      });
  };
}
//------------With Fetch-------------------
// export function getRecipes() {
//   return async function (dispatch) {
//     dispatch({ type: SET_LOADING });

//     try {
//       const response = await fetch("/recipes");

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "An error occurred");
//       }

//       const data = await response.json();
//       dispatch({ type: GET_RECIPES, payload: data });
//     } catch (error) {
//       dispatch({
//         type: ERROR_GET_RECIPES,
//         error: error.message || "Unknown error",
//       });
//     }
//   };
// }

export function getDiets() {
  return async function (dispatch) {
    dispatch({ type: SET_LOADING }); // Cambiar loading a true
    return axios
      .get(`/diets`)
      .then((response) => {
        dispatch({ type: GET_DIETS, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          // Error de respuesta HTTP con código de estado no exitoso
          dispatch({ type: ERROR_GET_DIETS, error: error.response.data });
        } else if (error.request) {
          // Error de solicitud sin respuesta del servidor
          if (error.request.withCredentials === false)
            dispatch({
              type: ERROR_GET_DIETS,
              error:
                "we no longer have api daily points, leave a message to Nico :)",
            });
          // Error de solicitud sin respuesta del servidor
          dispatch({
            type: ERROR_GET_DIETS,
            error:
              "An error has occured, leave a message to Nico and try later :)",
          });
        } else {
          // Otros errores
          dispatch({
            type: ERROR_GET_RECIPES,
            error: "Unknokn error",
          });
        }
      });
  };
}

export function getDetailRecipe(id) {
  return async function (dispatch) {
    dispatch({ type: SET_LOADING }); // Cambiar loading a true
    return axios
      .get(`/recipes/${id}`)
      .then((response) => {
        dispatch({ type: GET_DETAIL_DIET, payload: response.data });
      })
      .catch((error) => {
        if (error.response) {
          // Error de respuesta HTTP con código de estado no exitoso
          dispatch({ type: ERROR_GET_DIETS, error: error.response.data });
        } else if (error.request) {
          // Error de solicitud sin respuesta del servidor
          dispatch({
            type: ERROR_GET_DIETS,
            error: "An error has occured, try later :(",
          });
        } else {
          // Otros errores
          dispatch({
            type: ERROR_GET_RECIPES,
            error: "Unknokn error",
          });
        }
      });
  };
}

export function addRecipe(payload) {
  return async function (dispatch) {
    let api = await axios.post(`/recipes`, payload);
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

export function setAnimationOnLanding() {
  return function (dispatch) {
    return dispatch({
      type: LANDING_ANIMATION,
    });
  };
}
