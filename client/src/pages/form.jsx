// import './App.css';

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import { addRecipe, getDiets, setLoading } from "../redux/actions";

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
  const loading = useSelector((state) => state.loading);
  const dietTypes = useSelector((state) => state.dietTypes);
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
    (async () => {
      dispatch(setLoading(true));
      await dispatch(getDiets());
      dispatch(setLoading(false));
    })();
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
      // history.push("/home");
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
    <div className="addRecipe">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <h1 className="msg">Create your own recipe!</h1>
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
                  <label className="msgs">Image:</label>
                  <input
                    name="image"
                    type="text"
                    value={input.image}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.image && (
                    <span className="errors">{errors.image}</span>
                  )}
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
                    name="stepByStep"
                    type="text"
                    rows="4"
                    cols="40"
                    value={input.stepByStep}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.stepByStep && (
                    <span className="errors">{errors.stepByStep}</span>
                  )}
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
        </>
      )}
    </div>
  );
}

export default Form;
