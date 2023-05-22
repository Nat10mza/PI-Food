// import './App.css';

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDiets } from "../redux/actions";

function Form() {
  const dispatch = useDispatch();
  const dietTypes = useSelector((state) => state.dietTypes);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    summary: "",
    score: "",
    healthScore: "",
    steps: "",
    dietTypes: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  function handleChange(e) {}

  function handleSubmit(e) {}

  function handleCheckBox(e) {}

  function handleSubmit(e) {}
  return (
    <div className="addRecipe">
      <h1 className="msg">Creat your own recipe!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form">
          <div className="prettierForm">
            <div className="nameInput">
              <label className="msgs">Name:</label>
              <input
                className="inputs"
                name="name"
                type="text"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <span className="errors">{errors.name}</span>}
            </div>
            <div className="nameInput">
              <label className="msgs">Summary:</label>
              <textarea
                name="summary"
                type="text"
                rows="4"
                cols="30"
                value={input.summary}
                onChange={(e) => handleChange(e)}
              />
              {errors.summary && (
                <span className="errors">{errors.summary}</span>
              )}
            </div>
            <div className="nameInput">
              <label className="msgs">Score:</label>
              <input
                name="score"
                type="number"
                value={input.score}
                onChange={(e) => handleChange(e)}
              />
              {errors.score && <span className="errors">{errors.score}</span>}
            </div>
            <div className="nameInput">
              <label className="msgs">Health Score:</label>
              <input
                name="healthScore"
                type="number"
                value={input.healthScore}
                onChange={(e) => handleChange(e)}
              />
              {errors.healthScore && (
                <span className="errors">{errors.healthScore}</span>
              )}
            </div>
            <div className="nameInput">
              <label className="msgs">Steps:</label>
              <textarea
                name="steps"
                type="text"
                rows="4"
                cols="40"
                value={input.steps}
                onChange={(e) => handleChange(e)}
              />
              {errors.steps && <span className="errors">{errors.steps}</span>}
            </div>
          </div>
          <div className="checkSelect">
            <label className="msgs">Diet Types:</label>
            {dietTypes.map((d) => {
              return (
                <div key={d.id} className="checks">
                  <label className="dietTypes">{d.name}</label>
                  <input
                    className="checks"
                    type="checkbox"
                    name={d.name}
                    value={d.name}
                    selected={input.dietTypes.includes(d.name)}
                    onChange={(e) => handleCheckBox(e)}
                  />
                </div>
              );
            })}
            {errors.dietTypes && (
              <span className="errors">{errors.dietTypes}</span>
            )}
          </div>
        </div>
        <button className="submitButton" type="submit">
          Submit Recipe
        </button>
        <Link to="/home">
          <button className="goBackButton">Go back</button>
        </Link>
      </form>
    </div>
  );
}

export default Form;
