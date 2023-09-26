// import './App.css';

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { addRecipe, getDiets } from "../redux/actions";
import styles from "./form.module.css";
import ErrorCard from "../components/ErrorCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function validate(input) {
  const errors = {};
  if (!input.name) errors.name = "Please complete with a recipe name";
  if (!input.summary)
    errors.summary = "Please add some comments about your recipe";
  if (!input.image.length) errors.image = "Please add a Image URL";
  if (input.healthScore < 1 || input.healthScore > 100)
    errors.healthScore = "The image must be a number between 1 and 100";
  if (!input.stepByStep.length)
    errors.stepByStep = "Please detail the stepByStep for your recipe";
  if (!input.dietTypes.length)
    errors.dietTypes = "You must select at least one diet type";
  return errors;
}

function Form() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.loading);
  const dietTypes = useSelector((state) => state.dietTypes);
  const error = useSelector((state) => state.error);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    summary: "",
    image: "",
    healthScore: "",
    stepByStep: [],
    dietTypes: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();
    setInput((prevInput) => {
      //// de esta manera el componente muestra los cambios (componentdidupdate?) para poder ir validando
      const newInput = {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
      const validations = validate(newInput);
      setErrors(validations);
      return newInput;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      input.name === "" &&
      input.summary === "" &&
      input.image === "" &&
      input.healthScore === "" &&
      input.stepByStep === "" &&
      !input.dietTypes.length
    ) {
      alert("Please complete the form");
    } else {
      dispatch(addRecipe(input));
      alert("New recipe added successfully!");
      setInput({
        name: "",
        summary: "",
        image: "",
        healthScore: "",
        stepByStep: [],
        dietTypes: [],
      });
      history.push("/home");
    }
  }

  function handleCheckBox(e) {
    let newArray = input.dietTypes;
    let find = newArray.indexOf(e.target.value);

    if (find >= 0) {
      newArray.splice(find, 1);
    } else {
      newArray.push(e.target.value);
    }

    setInput({
      ...input,
      dietTypes: newArray,
    });
    const validations = validate(input);
    setErrors(validations);
  }

  return (
    <div className={styles.form}>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorCard errorMessage={error} />
      ) : dietTypes ? (
        <>
          <h1 className="msg">Create your own recipe!</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form">
              <div className="prettierForm">
                <div className="nameInput">
                  <input
                    className="inputs"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={input.name}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.name && <p className="errors">{errors.name}</p>}
                </div>
                <div className="nameInput">
                  <textarea
                    placeholder="Summary"
                    name="summary"
                    type="text"
                    rows="4"
                    cols="40"
                    value={input.summary}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.summary && <p className="errors">{errors.summary}</p>}
                </div>
                <div className="nameInput">
                  <input
                    placeholder="Image"
                    name="image"
                    type="text"
                    value={input.image}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.image && <p className="errors">{errors.image}</p>}
                </div>
                <div className="nameInput">
                  <input
                    name="healthScore"
                    placeholder="Health Score"
                    type="number"
                    value={input.healthScore}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.healthScore && (
                    <p className="errors">{errors.healthScore}</p>
                  )}
                </div>
                <div className="nameInput">
                  <textarea
                    placeholder="Steps"
                    name="stepByStep"
                    type="text"
                    rows="4"
                    cols="40"
                    value={input.stepByStep}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.stepByStep && (
                    <p className="errors">{errors.stepByStep}</p>
                  )}
                </div>
              </div>
              <div className="checkSelect">
                <label className="msgs">Diet Types:</label>
                {dietTypes.map((d) => {
                  return (
                    <div key={d.id} className="checks">
                      <input
                        className="checks"
                        type="checkbox"
                        name={d.name}
                        value={d.name}
                        selected={input.dietTypes.includes(d.name)}
                        onChange={(e) => handleCheckBox(e)}
                      />
                      <label className="dietTypes">{d.name}</label>
                    </div>
                  );
                })}
                {errors.dietTypes && (
                  <p className="errors">{errors.dietTypes}</p>
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
        </>
      ) : null}
    </div>
  );
}

export default Form;
